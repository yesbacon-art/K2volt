export const inquiryFields = ['name', 'email', 'company', 'location', 'application', 'product', 'timeline', 'brief'] as const;
export const inquiryValidationOrder = ['name', 'email', 'location', 'application', 'brief'] as const;

export type InquiryValues = Record<(typeof inquiryFields)[number], string>;
export type InquiryValidationField = (typeof inquiryValidationOrder)[number];
export type InquiryErrors = Partial<Record<InquiryValidationField, string>>;

export function validateInquiry(input: InquiryValues): { values: InquiryValues; errors: InquiryErrors } {
  const values = Object.fromEntries(inquiryFields.map((field) => [field, input[field].trim()])) as InquiryValues;
  const errors: InquiryErrors = {};

  if (!values.name) errors.name = 'Enter your name.';
  else if (values.name.length > 120) errors.name = 'Keep your name to 120 characters or fewer.';

  if (!values.email) errors.email = 'Enter your email address.';
  else if (values.email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = 'Enter a valid email address.';

  if (!values.location) errors.location = 'Enter the project city, state or country.';
  else if (values.location.length > 160) errors.location = 'Keep the project location to 160 characters or fewer.';

  if (!values.application) errors.application = 'Select an application.';

  if (!values.brief) errors.brief = 'Tell us about your project.';
  else if (values.brief.length < 10) errors.brief = 'Add at least 10 characters, not including leading or trailing spaces.';
  else if (values.brief.length > 3000) errors.brief = 'Keep the project brief to 3,000 characters or fewer.';

  return { values, errors };
}
