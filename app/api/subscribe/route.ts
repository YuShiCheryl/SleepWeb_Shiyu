import { NextResponse } from 'next/server'

// 邮件订阅 API
export async function POST(request: Request) {
  try {
    const { email } = await request.json()
    
    // 验证邮箱格式
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: '请输入有效的邮箱地址' },
        { status: 400 }
      )
    }
    
    // TODO: 这里可以连接到邮件服务（如 Mailchimp、SendGrid）
    // 或者存储到数据库
    console.log('新订阅邮箱:', email)
    
    // 模拟成功响应
    return NextResponse.json(
      { 
        success: true, 
        message: '订阅成功！感谢您的关注' 
      },
      { status: 200 }
    )
    
  } catch (error) {
    return NextResponse.json(
      { error: '订阅失败，请稍后重试' },
      { status: 500 }
    )
  }
}

