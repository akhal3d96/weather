pipeline {
  agent {
    kubernetes {
      yaml '''
        apiVersion: v1
        kind: Pod
        metadata:
          labels:
            name: weather-app
        spec:
          containers:
          - name: ubuntu
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
    stage('Build and install') {
      steps {
        container('ubuntu') {
          sh "pwd"
          sh "ls -lhA"
          sh "buildctl build --frontend dockerfile.v0 --local context=. --local dockerfile=. --output type=oci,dest=image.tar"
        }
      }
    }
  }
}