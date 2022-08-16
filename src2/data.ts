export interface AddressData {
  line1: string;
  line2: string;
  city: string;
  region: string;
  postalCode: string;
}

export interface StreamOutput {
  address: AddressData;
  name: string;
  id: string;
  locale: string;
  _site: {
    c_siteTitle1: string;
    c_siteDescription1: string;
  }
}

export interface Data {
  streamOutput: StreamOutput;
  feature: string;
}

export interface Result {
  content: string;
  path: string;
  redirects: string[];
}    
