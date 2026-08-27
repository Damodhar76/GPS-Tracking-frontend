# Deploy this project with Vercel Drop

1. Open https://vercel.com/drop and sign in.
2. Drag the complete `lambodra-gps-vercel.zip` file onto the upload area.
3. Select your Vercel account or team.
4. Keep **Framework Preset** as **Next.js**.
5. Build command: `npm run build`
6. Install command: `npm install`
7. No environment variables are required for this frontend demo.
8. Select **Deploy**.

The Request Demo form currently shows a client-side success state. Connect it
to an email/CRM API later if production enquiry delivery is required.

## Local development

```bash
npm install
npm run dev
```

## Production verification

```bash
npm run build
npm start
```
