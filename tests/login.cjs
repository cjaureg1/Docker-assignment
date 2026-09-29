const {chromium}=require('playwright');
const assert=require('node:assert/strict');
(async()=>{const browser=await chromium.launch({headless:true});const page=await browser.newPage({viewport:{width:1100,height:800}});await page.goto(process.env.TEST_URL||'http://localhost:8080');
const submit=async(e,p,expected)=>{await page.locator('#email').fill(e);await page.locator('#password').fill(p);await page.getByRole('button',{name:'Log in',exact:true}).click();assert.match(await page.locator('#message').innerText(),expected);assert.equal(await page.locator('#password').inputValue(),'');};
await submit('','',/both/);await submit('bad','x',/valid email/);await submit('demo@example.com','wrong',/Incorrect/);await submit('demo@example.com','Demo123!',/successful/);
assert.equal(await page.locator('#password').getAttribute('type'),'password');
assert.equal(await page.evaluate(()=>localStorage.length),0);
await page.screenshot({path:'docs/login-preview.png',fullPage:true});
console.log('Passed: empty fields, malformed email, incorrect credentials, successful login, password masking/clearing, no local storage.');await browser.close();})().catch(e=>{console.error(e);process.exit(1)});

