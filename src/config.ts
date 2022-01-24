import joi from 'joi';

interface EnvVariables {
    NODE_ENV: string;
    TYPEORM_CONNECTION_NAME: string;
    AWS_ENDPOINT_URL?: string;
    AWS_ACCESS_KEY_ID: string;
    AWS_SECRET_ACCESS_KEY: string;
    AWS_BUCKET_NAME: string;
}

const envSchema = joi
    .object<EnvVariables>()
    .keys({
        NODE_ENV: joi
            .string()
            .valid('production', 'development')
            .default('development'),
        TYPEORM_CONNECTION_NAME: joi.string().default('mysql'),
        AWS_ENDPOINT_URL: joi.string().uri(),
        AWS_ACCESS_KEY_ID: joi.string().required(),
        AWS_SECRET_ACCESS_KEY: joi.string().required(),
        AWS_BUCKET_NAME: joi.string().required()
    })
    .unknown();

const validated = envSchema
    .prefs({ errors: { label: 'key' } })
    .validate(process.env);

if (validated.error) {
    throw new Error(validated.error.message);
}

export default validated.value;
