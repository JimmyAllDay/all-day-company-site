import { NextResponse } from 'next/server';
import emailjs, { EmailJSResponseStatus } from '@emailjs/nodejs';

export const POST = async (request) => {
  const body = await request.json();

  const name = body.name;
  const email = body.email;
  const message = body.message;

  const templateParams = {
    name: name,
    email: email,
    message: message,
  };

  try {
    await emailjs.send(
      process.env.EMAILJS_SERVICE_ID,
      process.env.EMAILJS_TEMPLATE_ID,
      templateParams,
      {
        publicKey: process.env.EMAILJS_PUBLIC_KEY,
        privateKey: process.env.EMAILJS_PRIVATE_KEY,
      }
    );
    console.log('SUCCESS!');
  } catch (err) {
    if (err instanceof EmailJSResponseStatus) {
      console.log('EMAILJS FAILED...', err);
    }
    console.log('ERROR', err);
    return new NextResponse('Database Error', { status: 500 });
  }

  return new NextResponse({ body, status: 200 });
};
