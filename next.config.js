module.exports = {
  async redirects() {
    return [
      {
        source: '/outbound/booking',
        destination: 'https://transport.booking.com/search?endLatitude=-12.11923780&endLongitude=-77.02784300&startLatitude=-12.02277900&startLongitude=-77.10642700',
        permanent: true,
      },
      {
        source: '/outbound/skylab',
        destination: 'https://www.redbulladvancedtechnologies.com/',
        permanent: true,
      },
      {
        source: '/outbound/trainline',
        destination: 'https://www.thetrainline.com/',
        permanent: true,
      },
      {
        source: '/outbound/trainline-whitelabel',
        destination: 'https://www.buytickets.crosscountrytrains.co.uk/',
        permanent: true,
      },
    ]
  },
}
