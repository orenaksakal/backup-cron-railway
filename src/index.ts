import { backup } from "./backup";
import { env } from "./env";

console.log("NodeJS Version: " + process.version);

const tryBackup = async () => {
  try {
    console.log("Backup started...");
    await backup();
  } catch (error) {
    console.error("Error while running backup: ", error);
    process.exit(1)
  }
}

if (env.BACKUP_DATABASE_URL) {
  tryBackup();
}
