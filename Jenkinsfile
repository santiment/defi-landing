podTemplate(label: 'defi-landing-builder', containers: [
  containerTemplate(name: 'docker', image: 'docker', ttyEnabled: true, command: 'cat', envVars: [
    envVar(key: 'DOCKER_HOST', value: 'tcp://docker-host-docker-host:2375')
  ])
]) {
  node('defi-landing-builder') {
    stage('Build') {
      container('docker') {
        def scmVars = checkout scm
        def gitHead = scmVars.GIT_COMMIT.substring(0,7)

        if (env.BRANCH_NAME == "master") {
          withCredentials([
            string(
              credentialsId: 'SECRET_KEY_BASE',
              variable: 'SECRET_KEY_BASE'
            ),
            string(
              credentialsId: 'aws_account_id',
              variable: 'aws_account_id'
            )
          ]) {
            def awsRegistry = "${env.aws_account_id}.dkr.ecr.eu-central-1.amazonaws.com"
            docker.withRegistry("https://${awsRegistry}", "ecr:eu-central-1:ecr-credentials") {
              sh "docker build -t ${awsRegistry}/defi-landing:${env.BRANCH_NAME} -t ${awsRegistry}/defi-landing:${scmVars.GIT_COMMIT} ."
              sh "docker push ${awsRegistry}/defi-landing:${env.BRANCH_NAME}"
              sh "docker push ${awsRegistry}/defi-landing:${scmVars.GIT_COMMIT}"
            }
          }
        }
      }
    }
  }
}
