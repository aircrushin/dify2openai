const response = await fetch('http://localhost:3000/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer app-DSNGeVN6PAjCB33qDdkQiorv',
    },
    body: JSON.stringify({
      model: 'dify',
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: '你好' },
      ],
    }),
  });
  
  const data = await response.json();
  console.log(data.choices[0].message.content);