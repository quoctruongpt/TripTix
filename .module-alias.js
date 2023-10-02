const path = require('path');

module.exports = {
  alias: {
    '@components': path.resolve(__dirname, 'src/components'),
    '@screens': path.resolve(__dirname, 'src/screens'),
    '@assets': path.resolve(__dirname, 'src/assets'),
    '@constants': path.resolve(__dirname, 'src/constants'),
    '@navigation': path.resolve(__dirname, 'src/navigation'),
    '@storage': path.resolve(__dirname, 'src/storage'),
    '@store': path.resolve(__dirname, 'src/store'),
    '@utils': path.resolve(__dirname, 'src/utils'),
    // Thêm các alias khác nếu cần thiết
  },
  extensions: ['js', 'jsx', 'json'], // Có thể thêm các extensions khác nếu cần
};
