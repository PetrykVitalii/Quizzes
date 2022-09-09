import HttpClient from '@/api/http-client';

export default class S3Api extends HttpClient {
  public constructor() {
    super('');
  }

  public uploadFile(url: string, file: File) {
    const headers = { 'Content-Type': file.type };
    return this.instance.put(url, file, { headers });
  }
}
