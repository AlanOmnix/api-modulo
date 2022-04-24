node {

    def app

    stage('Clone repository') {
      
        checkout scm

    }

    stages('Test node.js') {
        
        stage('Sonarqube analsis'){
            nodejs(nodeJSInstallationName: 'nodejs'){
                sh "npm install"
            }
        }
        
    }

    
}