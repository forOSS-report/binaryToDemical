node {
	def app
	stage('Clone repository') {
		git 'https://github.com/forOSS-report/binaryToDecimal.git'
	}
	stage('Build image') {
		app = docker.build("chaeyes/foross")
	}
	stage('Test image') {
		app.inside {
			sh 'make test'
		}
	}
	stage('Push image') {
		docker.withRegistry('https://registry.hub.docker.com', 'dockerhub') {
			app.push("${env.BUILD_NUMBER}")
			app.push("latest")
		}
	}
}