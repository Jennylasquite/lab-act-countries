<Route path="/" element={<Layout />}>
  <Route index element={<HomePage />} />
  <Route path="countries" element={<CountriesPage />} />
  <Route path="bucket-list" element={<BucketListPage />} />
  <Route path="about" element={<AboutPage />} />
  <Route path="*" element={<NotFoundPage />} />
</Route>