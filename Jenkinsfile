pipeline {
  agent {
    kubernetes {
      yaml '''
        apiVersion: v1
        kind: Pod
        metadata:
          labels:
            name: expert-i-frontend-pipeline
        spec:
          containers:
          - name: node
            image: node:14-stretch-slim
            command:
              - sleep
            args:
              - 99d
          - name: buildkit
            image: moby/buildkit:master
            readinessProbe:
              exec:
                command:
                  - buildctl
                  - debug
                  - workers
              initialDelaySeconds: 5
              periodSeconds: 30
            livenessProbe:
              exec:
                command:
                  - buildctl
                  - debug
                  - workers
              initialDelaySeconds: 5
              periodSeconds: 30
            securityContext:
              privileged: true
        '''
    }
  }
  stages {
    stage('install node_modules') {
      steps {
        container('node') {
          cache(maxCacheSize: 2048, caches: [
            [$class: 'ArbitraryFileCache', path: 'node_modules', cacheValidityDecidingFile: 'yarn.lock', compressionMethod: 'TARGZ']
          ]) {
            sh "yarn install"
          }
        }
      }
    }
    stage('Build') {
      steps {
        container('node') {
          sh "yarn build"
        }
      }
    }
  }
}
