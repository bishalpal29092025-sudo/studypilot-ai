/**
 * Simple logger used by database seed scripts.
 */

export const logger = {
    info(message: string) {
      console.log(`ℹ️  ${message}`);
    },
  
    success(message: string) {
      console.log(`✅ ${message}`);
    },
  
    warning(message: string) {
      console.log(`⚠️  ${message}`);
    },
  
    error(message: string) {
      console.error(`❌ ${message}`);
    },
  
    section(title: string) {
      console.log("\n" + "=".repeat(60));
      console.log(`🌱 ${title}`);
      console.log("=".repeat(60));
    },
  };