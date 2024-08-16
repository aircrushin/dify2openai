## DIFY2OPENAI
**Use Dify on your favorite OpenAI client.**

This project converts the Dify API to the OpenAI API format, giving you access to Dify's LLMs, knowledge base, tools, and workflows within your preferred OpenAI clients.


## Features
- Convert Dify API into an OpenAI API
- Support streaming and blocking
- Support Agent bots API on dify
- Support Chat bots API on dify
- Support Cors

## Deployment
### Zeabur
[![Deploy on Zeabur](https://zeabur.com/button.svg)](https://zeabur.com/templates/92RLEZ?referralCode=fatwang2)

### Vercel
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/fatwang2/dify2openai&env=DIFY_API_URL&envDescription=https://api.dify.ai/v1)

**Note:** Vercel's serverless functions have a 10-second timeout limit.


### Local Deployment
1. Set the environment variable in the .env file
```bash
DIFY_API_URL=https://api.dify.ai/v1
```

2. Install dependencies 
```bash
npm install
```

3. Run the project
```bash
npm start
```

## Usage
```JavaScript
const response = await fetch('http://localhost:3000/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_DFIY_API_KEY',
  },
  body: JSON.stringify({
    model: 'dify',
    messages: [
      { role: 'system', content: 'You are a helpful assistant.' },
      { role: 'user', content: 'Hello, how are you?' },
    ],
  }),
});

const data = await response.json();
console.log(data);
```
