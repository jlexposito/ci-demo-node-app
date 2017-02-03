node {
    stage 'check environment'
    //sh "node -v"
    //sh "npm -v"

    stage 'checkout'
    checkout scm

    stage 'npm install'
    //sh "npm install"

    stage 'build'
    def v = version()
  	if (v) {
    	echo "Building version ${v}"
  	}
    

    stage 'Build docker image' 
    	echo "Building docker image DOCKERUSER/ci-demo-node-app:${folderName(env.BRANCH_NAME)}"
		//sh "docker build -t DOCKERUSER/ci-demo-node-app:$DOCKER_TAG docker/"

    stage 'Push docker image'
    	//sh "docker push DOCKERUSER/ci-demo-node-app:$DOCKER_TAG"
    
}

def version() {
  def matcher = readFile('package.json') =~ 'version": "(.+)",'
  matcher ? matcher[0][1] : null
}
def folderName(String branchName) {
  switch(branchName) {
    case "master":
        return version();
    case "develop":
        return "develop";
    default:
       return branchName;
  }
}