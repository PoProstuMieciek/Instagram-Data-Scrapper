import S3, { ClientConfiguration, Body } from 'aws-sdk/clients/s3';

import env from '../config';
const {
    AWS_BUCKET_NAME,
    AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY,
    AWS_ENDPOINT_URL
} = env;

export class ObjectStorageProvider {
    private bucketName: string;
    private s3: S3;

    constructor(
        bucketName: string = AWS_BUCKET_NAME,
        options?: ClientConfiguration
    ) {
        if (!options) {
            options = {
                credentials: {
                    accessKeyId: AWS_ACCESS_KEY_ID,
                    secretAccessKey: AWS_SECRET_ACCESS_KEY
                },
                endpoint: AWS_ENDPOINT_URL,
                s3ForcePathStyle: true
            };
        }

        this.bucketName = bucketName;
        this.s3 = new S3(options);
    }

    upload(filename: string, file: Body) {
        return this.s3
            .putObject({
                Bucket: this.bucketName,
                Key: filename,
                Body: file
            })
            .promise();
    }

    delete(filename: string) {
        return this.s3
            .deleteObject({
                Bucket: this.bucketName,
                Key: filename
            })
            .promise();
    }

    download(filename: string) {
        return this.s3
            .getObject({
                Bucket: this.bucketName,
                Key: filename
            })
            .promise();
    }
}
