# MongoDB Atlas Connection Guide

## Issue: SSL/TLS Connection Error

The error you're seeing is typically caused by one of these issues:

### 1. Incorrect Password
Your current connection string has `admin` as the password. Make sure this is your actual MongoDB Atlas password.

### 2. Connection String Format
Replace the `<db_password>` placeholder with your actual password:

```
# Correct format:
DATABASE_URL="mongodb+srv://Lee:YOUR_ACTUAL_PASSWORD@seminar.mcunain.mongodb.net/teachers_seminar?retryWrites=true&w=majority&appName=Seminar"
```

### 3. IP Whitelist
Make sure your IP address is whitelisted in MongoDB Atlas:
- Go to MongoDB Atlas Dashboard
- Navigate to Network Access
- Add your current IP address (0.0.0.0/0 for all IPs during development)

### 4. Database User Permissions
Ensure the user "Lee" has proper read/write permissions:
- Go to Database Access in MongoDB Atlas
- Make sure the user has "readWrite" role for the database

### 5. Try Alternative Connection String
If SSL issues persist, try this format:

```
DATABASE_URL="mongodb+srv://Lee:PASSWORD@seminar.mcunain.mongodb.net/teachers_seminar?retryWrites=true&w=majority&ssl=true&authSource=admin"
```

### 6. Test Connection
Run this command to test the connection:
```bash
npm run test-db
```

### Common Solutions:
1. **Reset MongoDB Atlas Password**: Create a new password without special characters
2. **Use URL Encoding**: If password has special characters, URL encode them
3. **Check Cluster Status**: Ensure your MongoDB Atlas cluster is running
4. **Firewall**: Check if your firewall is blocking the connection

## Next Steps:
1. Update your .env file with the correct password
2. Restart your development server
3. Try registering again
