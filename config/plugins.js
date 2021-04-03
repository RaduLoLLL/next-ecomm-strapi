module.exports = ({ env }) => {
  if (env("NODE_ENV") === "production") {
    return {
      upload: {
        provider: "aws-s3",
        providerOptions: {
          accessKeyId: env("AWS_ACCESS_KEY_ID"),
          secretAccessKey: env("AWS_ACCESS_SECRET"),
          region: "AWS_REGION",
          params: {
            Bucket: "AWS_BUCKET",
          },
        },
      },
    };
  }

  return {};
};
