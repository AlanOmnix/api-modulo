node {

    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub')
    }

    stages {

        stage('Clone repository') {

            checkout scm
            
        }

        stage('Build image') {
            steps {
                sh 'docker build -t alanx30/ecommercemodulo_apinode:${env.BUILD_NUMBER} .'
            }
        }

        stage('Login Docker') {
            steps {
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
            }
        }

        stage('Push') {

			steps {
				sh 'alanx30/ecommercemodulo_apinode:${env.BUILD_NUMBER}'
			}
		}
        
        stage('Trigger ManifestUpdate') {
            echo "triggering updatemanifestjob"
            build job: 'updatemanifestapi', parameters: [string(name: 'DOCKERTAG', value: env.BUILD_NUMBER)]
        }

    }

    post {
		always {
			sh 'docker logout'
		}
	}

}