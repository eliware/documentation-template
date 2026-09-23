test('documentation-template.mjs can be imported without error', async () => {
  process.env.LOG_LEVEL = 'none';
  await import('../documentation-template.mjs');
  expect(true).toBe(true);
});
