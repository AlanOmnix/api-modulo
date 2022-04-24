node {

    def app

    stage('Clone repository') {
      
        checkout scm

    }


        
    stage('Sonarqube analsis'){

        nodejs(nodeJSInstallationName: 'nodejs'){
            sh "npm install"
            withSonarQubeEnv('sonar'){
                sh "npm install --save-dev mocha chai"
                sh "npm run test"
                sh "npm run coverage-lcov"
                sh "npm install sonar-scanner"
                sh "npm run sonar"
            }
        }
    }     
    
}