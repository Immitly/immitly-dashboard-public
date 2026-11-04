// PUBLIC-SAFE BUILD. Internal figures are excluded by design.
// Source of every figure is the public immitly.com record.
// Update path: edit this file only, then rebuild. See README, Public-safe rule.

export interface CountryRow {
  country: string
  state: 'VERIFICATION HELD'
  note?: string
}

export const venture = {
  name: 'Immitly',
  descriptor: 'Verified immigration guidance, step by step.',
  slogan: 'Mother of All Immigration',
  status: 'Pre-launch',
  legalLine:
    'Paid case-specific advice belongs to licensed lawyers and RCICs only. Immitly never files and never represents. IRPA s.91.',
}

export const coverage = {
  status: 'COMPLETE',
  completedOn: '2026-10-28',
  countriesHeld: 197,
  countriesTotal: 197,
  panelFiles: 198,
  countryPanels: 197,
  jurisdictionPanels: 1,
  panelNote: '197 country panels plus the Hong Kong jurisdiction panel.',
  registerNote:
    'Register: 193 UN members plus 2 observers plus Kosovo plus Taiwan equals 197.',
}

// Named countries from the public record. Every panel sits in
// verification-held state. No per-country scoring is shown in this build.
export const representativeCountries: CountryRow[] = [
  { country: 'Canada', state: 'VERIFICATION HELD' },
  { country: 'Guatemala', state: 'VERIFICATION HELD' },
  { country: 'Honduras', state: 'VERIFICATION HELD' },
  { country: 'Hong Kong', state: 'VERIFICATION HELD', note: 'Jurisdiction panel, outside the 197 count' },
  { country: 'Mexico', state: 'VERIFICATION HELD' },
  { country: 'United Kingdom', state: 'VERIFICATION HELD' },
  { country: 'United States', state: 'VERIFICATION HELD' },
  { country: 'Uruguay', state: 'VERIFICATION HELD' },
  { country: 'Yemen', state: 'VERIFICATION HELD' },
]

export const liveSite = {
  version: 'v9',
  liveOn: '2026-10-29',
  hosts: ['immitly.com', 'www.immitly.com', 'immitly.app'],
  descriptor: 'Verified immigration guidance, step by step.',
  slogan: 'Mother of All Immigration',
  features: [
    'All 197 capitals on a dotted globe at real coordinates',
    'Corridor dossier with five data bands',
    'Live temperature for the compared cities',
    'Currency converter across 166 currencies',
  ],
}
