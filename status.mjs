export default {fetch(){return Response.json({configured:!!process.env.OPENAI_API_KEY&&(process.env.FOCUS90_ACCESS_TOKEN||'').length>=24},{headers:{'Cache-Control':'no-store'}})}};
