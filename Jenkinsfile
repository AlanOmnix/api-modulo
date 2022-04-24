node {

    def app

    stage('Clone repository') {
      
        checkout scm

    }


        
    stage('Sonarqube analsis'){

        nodejs(nodeJSInstallationName: 'nodejs'){
            sh "npm install"
            withSonarQubeEnv('sonarqube'){
                sh "npm install sonar-scanner"
                sh "npm run sonarqube"
            }
        }
    }     
    
}