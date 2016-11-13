const keyFilename="./my-private-api-key-file.json"; //replace this with api key file
const projectId = "my-project-id-should-go-here" //replace with your project id
const bucketName = `${projectId}.appspot.com`;

const mime = require('mime');
const gcs = require('@google-cloud/storage')({
    projectId,
    keyFilename
});

const bucket = gcs.bucket(bucketName);

const filePath = `./package.json`;
const uploadTo = `subfolder/package.json`;
const fileMime = mime.lookup(filePath);

bucket.upload(filePath, {
    destination: uploadTo,
    public: true,
    metadata: { contentType: fileMime, cacheControl: "public, max-age=300" }
}, function (err, file) {
    if (err) {
        console.log(err);
        return;
    }
    console.log(createPublicFileURL(uploadTo));
});




function createPublicFileURL(storageName) {
    return `http://storage.googleapis.com/${bucketName}/${encodeURIComponent(storageName)}`;

}


/*
//// you can check if a files exists or delete a file using the following
const gcFile = bucket.file(uploadTo);
gcFile.exists((err,exists)=>console.log(err||exists));
gcFile.delete((err,res)=>console.log(err||res));

*/