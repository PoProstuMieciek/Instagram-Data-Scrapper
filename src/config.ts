import joi from 'joi';

export const logging_levels = {
    emerg: 0,
    alert: 1,
    crit: 2,
    error: 3,
    warn: 4,
    notice: 5,
    info: 6,
    debug: 7
};

export interface EnvVariables {
    NODE_ENV: 'production' | 'development';
    SCRAPER_LOGGING_LEVEL: string;
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
        SCRAPER_LOGGING_LEVEL: joi
            .string()
            .valid(...Object.keys(logging_levels))
            .default('info'),
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
