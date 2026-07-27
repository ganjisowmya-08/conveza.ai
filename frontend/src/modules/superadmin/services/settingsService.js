const API_BASE = '/api/superadmin';

export const settingsService = {
  getSettings: async () => {
    try {
      const res = await fetch(`${API_BASE}/settings`);
      if (res.ok) return await res.json();
    } catch (e) {
      console.warn("Real API settings endpoint offline. Returning empty settings:", e);
    }
    return {
      rootDomain: "conveza.ai",
      adminEmail: "admin@conveza.ai",
      smtpHost: "smtp.mailgun.org",
      smtpPort: "587",
      smtpUser: "postmaster@conveza.ai",
      smtpPass: "••••••••••••••••",
      storageProvider: "AWS S3",
      s3Bucket: "conveza-media-prod",
      s3Region: "ap-southeast-1",
      backupInterval: "daily",
      stripePubKey: "pk_test_conveza_51O..."
    };
  }
};

export default settingsService;
