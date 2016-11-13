## For more information please refer to [my blog post](https://mzmuse.com/blog/how-to-upload-to-firebase-storage-in-node)

# Firebase Upload Demo
This repository demonstrates how to upload a file to Firebase Storage using Google Cloud Storage sdk.
In order to get this working you need the following
0. Install dependencies
```
npm install
```
1. create a Firebase project.
2. Generate a Private Key File from your Firebase project dashboard and place it in the root of the repository.
3. Replace keyFileName with the name of your Private Key File
```javascript
const keyFilename="./my-private-api-key-file.json"; //replace this with api key file
```
4. Find your projectId from your Firebase application dashboard. It should be under the Storage section formatted as such
```
 gs://<PROJECT_ID>.appspot.com
```
5. Replace projectId variable with your PROJECT_ID
```javascript
const projectId = "my-project-id-should-go-here" //replace with your project id
```