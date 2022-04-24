node {

    def app

    stage('Clone repository') {
      
        checkout scm

    }


        
    stage('Sonarqube analsis'){
        nodejs(nodeJSInstallationName: 'nodejs'){
            sh "npm install"
        }
    }     

    
}