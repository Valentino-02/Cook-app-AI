import axios from 'axios';
import asyncHandler from 'express-async-handler'

import config from '../config.js';

const url = 'https://api.openai.com/v1/completions'
const token = config.OPENAI_API_KEY
const configuration = {
  headers: { 'Authorization': `Bearer ${token}`}
}

const body = {
  "model": "text-ada-001",
  "prompt": "Say this is a test {}",
  "max_tokens": 10,
  "temperature": 0.5,
  "top_p": 1,
  "n": 1,
  "stream": false,
  "logprobs": null,
  "stop": "{}"
}

export const getAwnser = asyncHandler(async (req, res) => {
  let text = await axios.post(url, body, configuration).then((response) => response.data)
  res.send(text)
})

