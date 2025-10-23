import { NextResponse } from 'next/server'

// 联系表单 API
export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()
    
    // 验证必填字段
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: '请填写所有必填字段' },
        { status: 400 }
      )
    }
    
    // TODO: 发送邮件通知、存储到数据库等
    console.log('收到联系表单:', { name, email, message })
    
    // 这里可以集成：
    // 1. 发送邮件（使用 Resend、SendGrid 等）
    // 2. 存储到数据库（MongoDB、PostgreSQL 等）
    // 3. 发送到企业微信/钉钉
    
    return NextResponse.json(
      { 
        success: true, 
        message: '感谢您的留言，我们会尽快回复！' 
      },
      { status: 200 }
    )
    
  } catch (error) {
    return NextResponse.json(
      { error: '提交失败，请稍后重试' },
      { status: 500 }
    )
  }
}


