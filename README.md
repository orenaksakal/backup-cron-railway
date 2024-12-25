# Postgres S3 backups

A simple NodeJS application to backup your PostgreSQL database to S3 via a cron.

**ENV VARIABLES**

AWS_ACCESS_KEY_ID=\
AWS_S3_BUCKET=\
AWS_S3_ENDPOINT=\
AWS_S3_REGION=\
AWS_SECRET_ACCESS_KEY=\
BACKUP_DATABASE_URL=${{database.DATABASE_URL}}\
BACKUP_NAME=


**RESTORATION**

gzip -k -d (FILE_NAME).sql.gz \
pg_restore -d -v (CONNECTION_STRING) TAR_FILE_NAME.tar
