// US States
export const US_STATES = [
  { code: "AL", name: "Alabama" },
  { code: "AK", name: "Alaska" },
  { code: "AZ", name: "Arizona" },
  { code: "AR", name: "Arkansas" },
  { code: "CA", name: "California" },
  { code: "CO", name: "Colorado" },
  { code: "CT", name: "Connecticut" },
  { code: "DE", name: "Delaware" },
  { code: "FL", name: "Florida" },
  { code: "GA", name: "Georgia" },
  { code: "HI", name: "Hawaii" },
  { code: "ID", name: "Idaho" },
  { code: "IL", name: "Illinois" },
  { code: "IN", name: "Indiana" },
  { code: "IA", name: "Iowa" },
  { code: "KS", name: "Kansas" },
  { code: "KY", name: "Kentucky" },
  { code: "LA", name: "Louisiana" },
  { code: "ME", name: "Maine" },
  { code: "MD", name: "Maryland" },
  { code: "MA", name: "Massachusetts" },
  { code: "MI", name: "Michigan" },
  { code: "MN", name: "Minnesota" },
  { code: "MS", name: "Mississippi" },
  { code: "MO", name: "Missouri" },
  { code: "MT", name: "Montana" },
  { code: "NE", name: "Nebraska" },
  { code: "NV", name: "Nevada" },
  { code: "NH", name: "New Hampshire" },
  { code: "NJ", name: "New Jersey" },
  { code: "NM", name: "New Mexico" },
  { code: "NY", name: "New York" },
  { code: "NC", name: "North Carolina" },
  { code: "ND", name: "North Dakota" },
  { code: "OH", name: "Ohio" },
  { code: "OK", name: "Oklahoma" },
  { code: "OR", name: "Oregon" },
  { code: "PA", name: "Pennsylvania" },
  { code: "RI", name: "Rhode Island" },
  { code: "SC", name: "South Carolina" },
  { code: "SD", name: "South Dakota" },
  { code: "TN", name: "Tennessee" },
  { code: "TX", name: "Texas" },
  { code: "UT", name: "Utah" },
  { code: "VT", name: "Vermont" },
  { code: "VA", name: "Virginia" },
  { code: "WA", name: "Washington" },
  { code: "WV", name: "West Virginia" },
  { code: "WI", name: "Wisconsin" },
  { code: "WY", name: "Wyoming" },
]

// Dynamic facility generator - creates a LockedIn MOCK Facility for any state
export function getFacilityForState(stateCode: string): { id: string; name: string; address: string } {
  const stateUpper = stateCode.toUpperCase()
  const stateName = US_STATES.find((s) => s.code === stateUpper)?.name || stateCode
  return {
    id: `${stateUpper.toLowerCase()}-lockedin`,
    name: `LockedIn MOCK Facility - ${stateName}`,
    address: `${stateName} State Correctional Services`,
  }
}

// First names by starting letter for dynamic generation
const FIRST_NAMES: Record<string, { male: string[]; female: string[] }> = {
  A: { male: ["Anthony", "Andre", "Aaron", "Adam", "Alex"], female: ["Angela", "Ashley", "Amber", "Amanda", "Alexis"] },
  B: { male: ["Brandon", "Brian", "Benjamin", "Bruce", "Byron"], female: ["Brittany", "Brenda", "Brooke", "Bailey", "Bianca"] },
  C: { male: ["Carlos", "Christopher", "Calvin", "Charles", "Cameron"], female: ["Crystal", "Carla", "Candice", "Cynthia", "Carmen"] },
  D: { male: ["Darnell", "David", "Derek", "Dominic", "Dwayne"], female: ["Danielle", "Destiny", "Diana", "Denise", "Dakota"] },
  E: { male: ["Eric", "Emmanuel", "Elijah", "Edward", "Evan"], female: ["Elizabeth", "Emily", "Erica", "Ebony", "Elena"] },
  F: { male: ["Frank", "Frederick", "Fernando", "Felix", "Franklin"], female: ["Felicia", "Faith", "Francesca", "Fiona", "Florence"] },
  G: { male: ["Gerald", "Gregory", "Gabriel", "George", "Gary"], female: ["Gloria", "Grace", "Gabrielle", "Gina", "Gwendolyn"] },
  H: { male: ["Harold", "Henry", "Hector", "Howard", "Hunter"], female: ["Heather", "Hannah", "Holly", "Hazel", "Helen"] },
  I: { male: ["Isaac", "Ivan", "Isaiah", "Ian", "Irvin"], female: ["Irene", "Ivy", "Imani", "Isabel", "India"] },
  J: { male: ["James", "Jerome", "Justin", "Jamal", "Jordan"], female: ["Jessica", "Jennifer", "Jasmine", "Jackie", "Jade"] },
  K: { male: ["Kevin", "Kenneth", "Kyle", "Keith", "Kendrick"], female: ["Kimberly", "Kayla", "Kelly", "Keisha", "Kristen"] },
  L: { male: ["Lawrence", "Leonard", "Luis", "Lamar", "Leon"], female: ["Latoya", "Linda", "Lisa", "Laura", "Lakisha"] },
  M: { male: ["Marcus", "Michael", "Matthew", "Malcolm", "Mario"], female: ["Maria", "Michelle", "Monica", "Melissa", "Maya"] },
  N: { male: ["Nathan", "Nicholas", "Nathaniel", "Norman", "Nelson"], female: ["Nicole", "Natasha", "Nancy", "Nina", "Naomi"] },
  O: { male: ["Oscar", "Omar", "Oliver", "Orlando", "Otis"], female: ["Olivia", "Octavia", "Opal", "Ophelia", "Odessa"] },
  P: { male: ["Patrick", "Paul", "Peter", "Philip", "Preston"], female: ["Patricia", "Pamela", "Paula", "Priscilla", "Penny"] },
  Q: { male: ["Quincy", "Quentin", "Quinn", "Quinton", "Quade"], female: ["Queen", "Queenie", "Quincy", "Quinn", "Questa"] },
  R: { male: ["Robert", "Ronald", "Raymond", "Richard", "Rodney"], female: ["Rachel", "Rebecca", "Rosa", "Regina", "Renee"] },
  S: { male: ["Steven", "Samuel", "Sean", "Shawn", "Stanley"], female: ["Stephanie", "Sandra", "Sarah", "Shaquita", "Samantha"] },
  T: { male: ["Terrence", "Thomas", "Timothy", "Travis", "Tyrone"], female: ["Tanya", "Teresa", "Tamika", "Tiffany", "Tracy"] },
  U: { male: ["Ulysses", "Uriel", "Urban", "Usher", "Umberto"], female: ["Unique", "Unity", "Uma", "Ursula", "Ula"] },
  V: { male: ["Victor", "Vincent", "Vernon", "Virgil", "Vance"], female: ["Victoria", "Vanessa", "Veronica", "Valerie", "Vivian"] },
  W: { male: ["William", "Walter", "Wayne", "Wesley", "Willie"], female: ["Wendy", "Whitney", "Wanda", "Wilma", "Wynona"] },
  X: { male: ["Xavier", "Xander", "Xerxes", "Xylon", "Xavion"], female: ["Ximena", "Xena", "Xiomara", "Xyla", "Xanthe"] },
  Y: { male: ["Yosef", "Yusuf", "Yuri", "Yancy", "Yale"], female: ["Yvonne", "Yasmine", "Yolanda", "Yvette", "Yara"] },
  Z: { male: ["Zachary", "Zion", "Zeke", "Zane", "Zachariah"], female: ["Zoe", "Zelda", "Zara", "Zena", "Zoey"] },
}

// Last names by starting letter
const LAST_NAMES: Record<string, string[]> = {
  A: ["Adams", "Anderson", "Allen", "Armstrong", "Austin"],
  B: ["Brown", "Bennett", "Bailey", "Brooks", "Bryant"],
  C: ["Carter", "Coleman", "Clark", "Campbell", "Collins"],
  D: ["Davis", "Dixon", "Douglas", "Daniels", "Dean"],
  E: ["Edwards", "Evans", "Ellis", "Elliott", "Emerson"],
  F: ["Franklin", "Foster", "Fisher", "Ford", "Flores"],
  G: ["Garcia", "Green", "Gray", "Griffin", "Graham"],
  H: ["Harris", "Hill", "Howard", "Hayes", "Henderson"],
  I: ["Ingram", "Irwin", "Ibarra", "Ivy", "Isaacs"],
  J: ["Johnson", "Jackson", "Jones", "James", "Jenkins"],
  K: ["King", "Kelly", "Kennedy", "Knight", "Knox"],
  L: ["Lewis", "Lee", "Lopez", "Long", "Lawrence"],
  M: ["Martin", "Miller", "Mitchell", "Moore", "Morgan"],
  N: ["Nelson", "Newman", "Nichols", "Norman", "Norton"],
  O: ["Owens", "Oliver", "Ortiz", "Osborne", "Odom"],
  P: ["Parker", "Perry", "Peterson", "Phillips", "Powell"],
  Q: ["Quinn", "Quarles", "Quigley", "Quick", "Quincy"],
  R: ["Robinson", "Rodriguez", "Reed", "Roberts", "Ross"],
  S: ["Smith", "Scott", "Stewart", "Sanders", "Sullivan"],
  T: ["Taylor", "Thomas", "Thompson", "Turner", "Tucker"],
  U: ["Underwood", "Upton", "Urban", "Ulrich", "Usher"],
  V: ["Vasquez", "Vaughn", "Vincent", "Vega", "Valdez"],
  W: ["Williams", "Walker", "Wilson", "White", "Washington"],
  X: ["Xiong", "Xavier", "Xu", "Xander", "Xenos"],
  Y: ["Young", "York", "Yates", "Yoder", "Yarbrough"],
  Z: ["Zimmerman", "Zuniga", "Ziegler", "Zamora", "Zhang"],
}

// Seeded random number generator for consistent results
function seededRandom(seed: number): number {
  const x = Math.sin(seed) * 10000
  return x - Math.floor(x)
}

// Generate a consistent inmate ID based on state and index
function generateInmateId(stateCode: string, index: number): string {
  const stateUpper = stateCode.toUpperCase()
  const num = (index * 1234 + 5678) % 10000
  return `${stateUpper}-${num.toString().padStart(4, "0")}`
}

// Generate random DOB between 1980-2005
function generateDOB(seed: number): string {
  const year = 1980 + Math.floor(seededRandom(seed) * 25)
  const month = 1 + Math.floor(seededRandom(seed + 1) * 12)
  const day = 1 + Math.floor(seededRandom(seed + 2) * 28)
  return `${year}-${month.toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`
}

export interface GeneratedInmate {
  id: string
  firstName: string
  lastName: string
  gender: "Male" | "Female"
  dob: string
}

// Generate inmates dynamically based on state and letter filter
export function generateInmatesByLetter(
  stateCode: string,
  letter: string,
  count: number = 4
): GeneratedInmate[] {
  const upperLetter = letter.toUpperCase()
  const stateUpper = stateCode.toUpperCase()
  
  if (!FIRST_NAMES[upperLetter] || !LAST_NAMES[upperLetter]) {
    return []
  }

  const inmates: GeneratedInmate[] = []
  const lastNames = LAST_NAMES[upperLetter]
  
  // Create a seed based on state and letter for consistent results
  const baseSeed = stateUpper.charCodeAt(0) * 1000 + upperLetter.charCodeAt(0)

  for (let i = 0; i < count && i < lastNames.length; i++) {
    const seed = baseSeed + i * 100
    const isMale = seededRandom(seed) > 0.5
    const gender: "Male" | "Female" = isMale ? "Male" : "Female"
    const firstNames = isMale ? FIRST_NAMES[upperLetter].male : FIRST_NAMES[upperLetter].female
    const firstName = firstNames[Math.floor(seededRandom(seed + 10) * firstNames.length)]
    const lastName = lastNames[i]

    inmates.push({
      id: generateInmateId(stateCode, baseSeed + i),
      firstName: firstName.toUpperCase(),
      lastName: lastName.toUpperCase(),
      gender,
      dob: generateDOB(seed + 20),
    })
  }

  return inmates
}

// Search inmates by ID or name
export function searchInmates(
  stateCode: string,
  query: string,
  searchType: "id" | "lastName"
): GeneratedInmate[] {
  if (!query) return []

  if (searchType === "id") {
    // For ID search, generate a specific inmate
    const upperQuery = query.toUpperCase()
    const stateUpper = stateCode.toUpperCase()
    
    // Extract number from ID if it matches pattern
    const match = upperQuery.match(/^([A-Z]{2})-?(\d{4})$/)
    if (match) {
      const num = parseInt(match[2], 10)
      const seed = num
      const letterIndex = num % 26
      const letter = String.fromCharCode(65 + letterIndex)
      
      const isMale = seededRandom(seed) > 0.5
      const gender: "Male" | "Female" = isMale ? "Male" : "Female"
      const firstNames = isMale ? FIRST_NAMES[letter].male : FIRST_NAMES[letter].female
      const firstName = firstNames[Math.floor(seededRandom(seed + 10) * firstNames.length)]
      const lastName = LAST_NAMES[letter][Math.floor(seededRandom(seed + 5) * LAST_NAMES[letter].length)]

      return [{
        id: `${stateUpper}-${num.toString().padStart(4, "0")}`,
        firstName: firstName.toUpperCase(),
        lastName: lastName.toUpperCase(),
        gender,
        dob: generateDOB(seed + 20),
      }]
    }
    return []
  }

  // For lastName search, filter by first letter
  const firstLetter = query.charAt(0).toUpperCase()
  if (firstLetter >= "A" && firstLetter <= "Z") {
    const inmates = generateInmatesByLetter(stateCode, firstLetter, 5)
    return inmates.filter((i) =>
      i.lastName.toLowerCase().includes(query.toLowerCase())
    )
  }

  return []
}

// Stripe Products and Payment Links
export const STRIPE_PACKAGES = [
  { 
    id: "prod_UNHv8iIj3fUtY6", 
    priceId: "price_1TOXLTGywiP3zLL87elPIDko",
    name: "Standard Comfort Pack", 
    price: 20, 
    description: "A balanced selection of approved snack items designed to provide comfort and variety. Includes assorted snacks based on facility-approved inventory.", 
    image: "/images/packages/comfort-snack-pack.jpg",
    paymentLink: "https://buy.stripe.com/test_8x25kDdtdauTbtC8dj6g803"
  },
  { 
    id: "prod_UNHwtJ9GKZI5ov", 
    priceId: "price_1TOXMRGywiP3zLL8L6anPHRN",
    name: "Essential Care Pack", 
    price: 20, 
    description: "A curated assortment of basic commissary-approved items selected to support daily comfort needs. Focuses on familiar, commonly accepted snack options.", 
    image: "/images/packages/sweet-relief-bundle.jpg",
    paymentLink: null // Recurring subscription - no payment link
  },
  { 
    id: "prod_UNHxIST5ltUepR", 
    priceId: "price_1TOXNOGywiP3zLL8RvKsn7es",
    name: "Daily Needs Snack Pack", 
    price: 20, 
    description: "A practical mix of everyday snack items designed to supplement commissary access with simple, approved goods.", 
    image: "/images/packages/savory-snack-pack.jpg",
    paymentLink: null // Recurring subscription - no payment link
  },
  { 
    id: "prod_UNHy2mBLY3Au3R", 
    priceId: "price_1TOXP0GywiP3zLL8vjZnt4TO",
    name: "Approved Commissary Pack A", 
    price: 20, 
    description: "A facility-compliant package built from pre-approved item lists. Structured to meet standard institutional commissary guidelines.", 
    image: "/images/packages/ramen-meal-pack.jpg",
    paymentLink: "https://buy.stripe.com/test_9B6dR9cp98mL2X6dxD6g801"
  },
  { 
    id: "prod_UNI0zn8h82HAck", 
    priceId: "price_1TOXQfGywiP3zLL88HHKTcPu",
    name: "Approved Commissary Pack B", 
    price: 20, 
    description: "A secondary approved package option offering an alternative selection of facility-compliant snack items.", 
    image: "/images/packages/hygiene-essentials-kit.jpg",
    paymentLink: "https://buy.stripe.com/test_dRmeVdcp9auT2X63X36g802"
  },
  { 
    id: "prod_UNI1uHCrFny9rU", 
    priceId: "price_1TOXRKGywiP3zLL8oddH0Wv1",
    name: "Facility Standard Pack", 
    price: 20, 
    description: "A baseline commissary package designed to meet general facility-approved standards for inmate snack access.", 
    image: "/images/packages/writing-supplies-pack.jpg",
    paymentLink: "https://buy.stripe.com/test_8x25kDbl50UjgNW2SZ6g800"
  },
]

// Base Commissary Packages (uses Stripe products)
export const BASE_PACKAGES = STRIPE_PACKAGES.map(pkg => ({
  id: pkg.id,
  name: pkg.name,
  price: pkg.price,
  description: pkg.description,
  image: pkg.image,
  paymentLink: pkg.paymentLink,
  priceId: pkg.priceId,
}))

// Facility-specific package availability (each facility has different allowed items)
// This simulates real-world restrictions where facilities have different commissary rules
export function getPackagesForFacility(stateCode: string, facilityId: string): typeof BASE_PACKAGES {
  const seed = stateCode.charCodeAt(0) + (facilityId.charCodeAt(0) || 0)
  
  // Different facilities allow different packages based on their rules
  // Use seed to deterministically select which packages are available
  const availableIndexes: number[] = []
  
  // Always include at least 4 packages, up to all 8
  const numPackages = 4 + (seed % 5) // 4-8 packages
  
  // Select packages based on state code pattern
  for (let i = 0; i < BASE_PACKAGES.length; i++) {
    if (availableIndexes.length >= numPackages) break
    // Use different selection criteria based on state
    const include = ((seed + i * 13) % 10) > 2 // ~70% chance per package
    if (include || availableIndexes.length < 4) {
      availableIndexes.push(i)
    }
  }
  
  // Ensure minimum of 4 packages
  while (availableIndexes.length < 4) {
    for (let i = 0; i < BASE_PACKAGES.length; i++) {
      if (!availableIndexes.includes(i)) {
        availableIndexes.push(i)
        break
      }
    }
  }
  
  // Sort and return available packages
  availableIndexes.sort((a, b) => a - b)
  return availableIndexes.map(i => BASE_PACKAGES[i])
}

// Legacy export for backward compatibility
export const COMMISSARY_PACKAGES = BASE_PACKAGES

// Fee structure (simplified - includes processing costs in service fee)
export const FEE_TIERS = [
  { min: 0, max: 25, serviceFee: 3.50 },
  { min: 25.01, max: 100, serviceFee: 4.75 },
  { min: 100.01, max: 200, serviceFee: 6.25 },
  { min: 200.01, max: Infinity, serviceFee: 7.75 },
]

export function calculateFees(amount: number): { serviceFee: number; total: number } {
  const tier = FEE_TIERS.find((t) => amount >= t.min && amount <= t.max)
  const serviceFee = tier?.serviceFee ?? 7.75
  return {
    serviceFee,
    total: Math.round((amount + serviceFee) * 100) / 100,
  }
}

export function getDeliveryDate(): Date {
  const date = new Date()
  date.setDate(date.getDate() + 3)
  // Skip weekends
  while (date.getDay() === 0 || date.getDay() === 6) {
    date.setDate(date.getDate() + 1)
  }
  return date
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

// Alphabet for filtering
export const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
