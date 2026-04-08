#!/usr/bin/env node
// CloudBase 数据库初始化脚本（请填入你的密钥后运行）
const { tcb } = require('tencentcloud-sdk-nodejs');
const Client = tcb.v20180608.Client;

const SECRET_ID = '';
const SECRET_KEY = '';

const client = new Client({
  credential: { secretId: SECRET_ID, secretKey: SECRET_KEY },
  region: 'ap-shanghai'
});

async function main() {
  const envId = 'football-1gjtctvt8c583ba2';
  console.log('=== CloudBase 数据库初始化 ===\n');

  try {
    console.log('[1] 查询现有表...');
    const r1 = await client.DescribeTables({ EnvId: envId });
    console.log('已有表:', JSON.stringify(r1));

    console.log('\n[2] 创建 football_games 表...');
    const r2 = await client.CreateTable({
      EnvId: envId,
      TableName: 'football_games',
      TableVersion: 'v1'
    });
    console.log('创建结果:', JSON.stringify(r2));

    console.log('\n[3] 验证表列表...');
    const r3 = await client.DescribeTables({ EnvId: envId });
    console.log('现有表:', JSON.stringify(r3));

    console.log('\n=== 完成 ===');
  } catch(e) {
    console.error('错误:', e.message || e);
  }
}

main();
