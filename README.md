# Assignment_09-02-22

The pipeline's script is:

pipeline {
    agent any

    stages {
        stage('git cloning') {
            steps {
                git([url: "https://github.com/Floshonggeu/Assignment_09-02-22.git", branch: 'main'])
            }
        }
        stage('cd to frontend and build npm') {
            steps {
                bat "cd"
                dir('Frontend')
                {
                    bat "npm install"
                    bat "npm start"
                }
            } 
        }
    }
}


The console's output is:

![image](https://user-images.githubusercontent.com/93647151/153729416-ce3b1a0a-6c61-4b2b-8d29-f5bb9e2e3ba5.png)

The result app is:

![image](https://user-images.githubusercontent.com/93647151/153729430-a2590c9c-46dc-4a53-b06f-06d970fc3945.png)
