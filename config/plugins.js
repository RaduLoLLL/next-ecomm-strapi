module.exports = ({ env }) => ({
  upload: {
    provider: "aws-s3",
    providerOptions: {
      accessKeyId: env("AKIASMS4IRLYCLF4I744"),
      secretAccessKey: env("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"),
      region: "eu-west-3",
      params: {
        Bucket: "cezara",
      },
    },
  },
});
