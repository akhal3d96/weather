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
          - name: node
            image: node:14-alpine3.15
            command:
            - sleep
            args:
            - 99d
        '''
    }
  }
  stages {
    stage('Build and install') {
      steps {
        container('node') {
          sh 'npm i -g yarn'
          sh 'yarn i'
          sh 'yarn build'
        }
      }
    }
  }
}