const jsx = require('./packages/eslint-config-uber-jsx/.eslintrc.js').rules;
const es2015 = require('./packages/eslint-config-uber-es2015/.eslintrc.js').rules;
const es5 = require('./packages/eslint-config-uber-es5/.eslintrc.js').rules;

const jsxKeys = Object.keys(jsx);
const es2015Keys = Object.keys(es2015);
const es5Keys = Object.keys(es5);

es5Keys.forEach(es5Key => {
  jsxKeys.forEach(jsxKey => {
    if (jsxKey === es5Key) {
      console.log(`jsx & es5 collision for key ${jsxKey}`);
      console.log(`jsx value: ${jsx[jsxKey]}`);
      console.log(`es5 value: ${es5[es5Key]}\n`);
    }
  });
  es2015Keys.forEach(es2015Key => {
    if (es2015Key === es5Key) {
      console.log(`es2015 & es5 collision for key ${es2015Key}`);
      console.log(`es2015 value: ${es2015[es2015Key]}`);
      console.log(`es5 value: ${es5[es5Key]}\n`);
    }
  });

});
