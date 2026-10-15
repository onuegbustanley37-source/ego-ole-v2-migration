// Mock data for EGO OLE? V2 — SE Nigerian markets
import { BANK } from './config';

export interface Market {
  id: string;
  name: string;
  state: 'Anambra' | 'Abia' | 'Enugu' | 'Ebonyi' | 'Imo';
  igboDay: 'Eke' | 'Orie' | 'Afor' | 'Nkwo' | 'Daily';
  lga: string;
  image: string;
}

export interface Item {
  id: string;
  name: string;
  category: 'Bags' | 'Shoes' | 'Wigs' | 'Clothes' | 'Foodstuff';
  price: number;
  oldPrice?: number;
  marketId: string;
  image: string;
  unit: string;
  vendorId?: string;
  tags?: string[];
}

export interface Vendor {
  id: string;
  name: string;
  phone: string;
  marketId: string;
  rating: number;
  banner: string;
  location: string;
  specialty: string;
}

export interface PricePoint {
  itemId: string;
  date: string;
  price: number;
  marketId: string;
}

// ─── 20 Markets ───────────────────────────────────────────────
export const markets: Market[] = [
  { id: 'm01', name: 'Main Market Onitsha', state: 'Anambra', igboDay: 'Daily', lga: 'Onitsha South', image: 'https://images.pexels.com/photos/16114746/pexels-photo-16114746.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { id: 'm02', name: 'Eke Awka', state: 'Anambra', igboDay: 'Eke', lga: 'Awka South', image: 'https://images.pexels.com/photos/36943006/pexels-photo-36943006.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { id: 'm03', name: 'Nkwo Nnewi', state: 'Anambra', igboDay: 'Nkwo', lga: 'Nnewi North', image: 'https://images.pexels.com/photos/38968336/pexels-photo-38968336.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { id: 'm04', name: 'Afor Igbo-Ukwu', state: 'Anambra', igboDay: 'Afor', lga: 'Aguata', image: 'https://images.pexels.com/photos/36790085/pexels-photo-36790085.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { id: 'm05', name: 'Orie Nnobi', state: 'Anambra', igboDay: 'Orie', lga: 'Idemili South', image: 'https://images.pexels.com/photos/33489786/pexels-photo-33489786.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { id: 'm06', name: 'Ariaria International Market Aba', state: 'Abia', igboDay: 'Daily', lga: 'Aba South', image: 'https://images.pexels.com/photos/17586367/pexels-photo-17586367.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { id: 'm07', name: 'Eke Umuahia', state: 'Abia', igboDay: 'Eke', lga: 'Umuahia North', image: 'https://images.pexels.com/photos/13583431/pexels-photo-13583431.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { id: 'm08', name: 'Orie Ugba Umuahia', state: 'Abia', igboDay: 'Orie', lga: 'Umuahia North', image: 'https://images.pexels.com/photos/34037175/pexels-photo-34037175.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { id: 'm09', name: 'Nkwo Ahia Ohuhu', state: 'Abia', igboDay: 'Nkwo', lga: 'Umuahia North', image: 'https://images.pexels.com/photos/36943006/pexels-photo-36943006.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { id: 'm10', name: 'Afor Bende', state: 'Abia', igboDay: 'Afor', lga: 'Bende', image: 'https://images.pexels.com/photos/38968336/pexels-photo-38968336.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { id: 'm11', name: 'Ogbete Main Market Enugu', state: 'Enugu', igboDay: 'Daily', lga: 'Enugu East', image: 'https://images.pexels.com/photos/16114746/pexels-photo-16114746.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { id: 'm12', name: 'Eke Ogui Enugu', state: 'Enugu', igboDay: 'Eke', lga: 'Enugu North', image: 'https://images.pexels.com/photos/36790085/pexels-photo-36790085.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { id: 'm13', name: 'Nkwo Nike', state: 'Enugu', igboDay: 'Nkwo', lga: 'Enugu East', image: 'https://images.pexels.com/photos/13583431/pexels-photo-13583431.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { id: 'm14', name: 'Orie Eke Oghe', state: 'Enugu', igboDay: 'Orie', lga: 'Udi', image: 'https://images.pexels.com/photos/34037175/pexels-photo-34037175.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { id: 'm15', name: 'Afor Awgu', state: 'Enugu', igboDay: 'Afor', lga: 'Awgu', image: 'https://images.pexels.com/photos/33489786/pexels-photo-33489786.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { id: 'm16', name: 'Abakpa Main Market', state: 'Ebonyi', igboDay: 'Daily', lga: 'Abakaliki', image: 'https://images.pexels.com/photos/38968336/pexels-photo-38968336.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { id: 'm17', name: 'Eke Ishiagu', state: 'Ebonyi', igboDay: 'Eke', lga: 'Ivo', image: 'https://images.pexels.com/photos/36943006/pexels-photo-36943006.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { id: 'm18', name: 'Nkwo Afikpo', state: 'Ebonyi', igboDay: 'Nkwo', lga: 'Afikpo North', image: 'https://images.pexels.com/photos/17586367/pexels-photo-17586367.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { id: 'm19', name: 'Relief Market Owerri', state: 'Imo', igboDay: 'Daily', lga: 'Owerri Municipal', image: 'https://images.pexels.com/photos/36790085/pexels-photo-36790085.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { id: 'm20', name: 'Eke Onuimo', state: 'Imo', igboDay: 'Eke', lga: 'Onuimo', image: 'https://images.pexels.com/photos/13583431/pexels-photo-13583431.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
];

// ─── 12 Vendors ───────────────────────────────────────────────
export const vendors: Vendor[] = [
  { id: 'v01', name: 'Nma Boutique', phone: '2348012345678', marketId: 'm01', rating: 4.8, banner: 'https://images.pexels.com/photos/8386651/pexels-photo-8386651.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', location: 'Stall B-42, Main Market Onitsha', specialty: 'Female Bags & Shoes' },
  { id: 'v02', name: 'Adaobi Wigs & Beauty', phone: '2348023456789', marketId: 'm02', rating: 4.9, banner: 'https://images.pexels.com/photos/8311880/pexels-photo-8311880.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', location: 'Stall A-15, Eke Awka', specialty: 'Wigs & Beauty' },
  { id: 'v03', name: 'Diuto Fashion House', phone: '2348034567890', marketId: 'm06', rating: 4.7, banner: 'https://images.pexels.com/photos/5531542/pexels-photo-5531542.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', location: 'Shop C-78, Ariaria Aba', specialty: 'Clothing & Ankara' },
  { id: 'v04', name: 'Chi-Chi Shoes Palace', phone: '2348045678901', marketId: 'm06', rating: 4.6, banner: 'https://images.pexels.com/photos/11911863/pexels-photo-11911863.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', location: 'Shop D-11, Ariaria Aba', specialty: 'Female Shoes' },
  { id: 'v05', name: 'Ugo Bags Gallery', phone: '2348056789012', marketId: 'm11', rating: 4.8, banner: 'https://images.pexels.com/photos/8311880/pexels-photo-8311880.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', location: 'Stall E-23, Ogbete Enugu', specialty: 'Designer Bags' },
  { id: 'v06', name: 'Ify Foodstuff Store', phone: '2348067890123', marketId: 'm01', rating: 4.5, banner: 'https://images.pexels.com/photos/36790085/pexels-photo-36790085.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', location: 'Stall F-05, Main Market Onitsha', specialty: 'Foodstuff & Provisions' },
  { id: 'v07', name: 'Amara Glam Wigs', phone: '2348078901234', marketId: 'm11', rating: 4.9, banner: 'https://images.pexels.com/photos/8386651/pexels-photo-8386651.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', location: 'Stall G-34, Ogbete Enugu', specialty: 'Premium Wigs' },
  { id: 'v08', name: 'Nwanyioma Apparel', phone: '2348089012345', marketId: 'm19', rating: 4.6, banner: 'https://images.pexels.com/photos/5531542/pexels-photo-5531542.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', location: 'Shop H-67, Relief Market Owerri', specialty: 'Women\'s Clothing' },
  { id: 'v09', name: 'Eze Dried Fish Depot', phone: '2348090123456', marketId: 'm16', rating: 4.4, banner: 'https://images.pexels.com/photos/36943006/pexels-photo-36943006.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', location: 'Stall I-12, Abakpa Market', specialty: 'Dried Fish & Seafood' },
  { id: 'v10', name: 'Glam Heels Boutique', phone: '2348011223344', marketId: 'm03', rating: 4.7, banner: 'https://images.pexels.com/photos/11911863/pexels-photo-11911863.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', location: 'Shop J-89, Nkwo Nnewi', specialty: 'High Heels & Sandals' },
  { id: 'v11', name: 'Oma Produce Dealer', phone: '2348022334455', marketId: 'm19', rating: 4.3, banner: 'https://images.pexels.com/photos/38968336/pexels-photo-38968336.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', location: 'Stall K-21, Relief Market Owerri', specialty: 'Foodstuff & Grains' },
  { id: 'v13', name: 'Ifite Ogwari Okro Farm', phone: BANK.whatsappLink.replace('https://wa.me/', ''), marketId: 'm01', rating: 5.0, banner: '/images/ifite-ogwari-okro.png', location: 'Ifite Ogwari, Anambra', specialty: 'Small tender fresh okro' },
  { id: 'v12', name: 'Stella Leather Works', phone: '2348033445566', marketId: 'm06', rating: 4.8, banner: 'https://images.pexels.com/photos/8311880/pexels-photo-8311880.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', location: 'Shop L-50, Ariaria Aba', specialty: 'Leather Bags' },
];

// ─── 30+ Items (Bags, Shoes, Wigs, Clothes + Foodstuff) ────────
export const items: Item[] = [
  { id: 'i00', name: 'Ifite Ogwari Okro (Small Tender Fresh)', category: 'Foodstuff', price: 1500, oldPrice: 2500, marketId: 'm01', vendorId: 'v13', image: '/images/ifite-ogwari-okro.png', unit: 'per paint bucket', tags: ['okro', 'okra', 'okwuru', 'ifite', 'ogwari', 'ifite ogwari', 'small', 'tender', 'fresh', 'vegetable'] },
  { id: 'i00b', name: 'Ifite Ogwari Okro - Bag', category: 'Foodstuff', price: 18000, oldPrice: 24000, marketId: 'm01', vendorId: 'v13', image: '/images/ifite-ogwari-okro.png', unit: 'per bag', tags: ['okro', 'okra', 'okwuru', 'ifite', 'ogwari', 'ifite ogwari', 'small', 'tender', 'fresh', 'vegetable', 'wholesale'] },
  // BAGS (8)
  { id: 'i01', name: 'Python Print Handbag', category: 'Bags', price: 28500, oldPrice: 35000, marketId: 'm01', vendorId: 'v01', image: 'https://images.pexels.com/photos/27174539/pexels-photo-27174539.jpeg?auto=compress&cs=tinysrgb&h=400&w=400', unit: 'piece' },
  { id: 'i02', name: 'Crocodile Pattern Bag', category: 'Bags', price: 32000, marketId: 'm06', vendorId: 'v12', image: 'https://images.pexels.com/photos/27046143/pexels-photo-27046143.jpeg?auto=compress&cs=tinysrgb&h=400&w=400', unit: 'piece' },
  { id: 'i03', name: 'Brown Leather Handbag', category: 'Bags', price: 18500, oldPrice: 22000, marketId: 'm11', vendorId: 'v05', image: 'https://images.pexels.com/photos/27204288/pexels-photo-27204288.jpeg?auto=compress&cs=tinysrgb&h=400&w=400', unit: 'piece' },
  { id: 'i04', name: 'Black Leather Bag', category: 'Bags', price: 25000, marketId: 'm02', vendorId: 'v01', image: 'https://images.pexels.com/photos/26736144/pexels-photo-26736144.jpeg?auto=compress&cs=tinysrgb&h=400&w=400', unit: 'piece' },
  { id: 'i05', name: 'Beige Handle Handbag', category: 'Bags', price: 21000, marketId: 'm03', vendorId: 'v12', image: 'https://images.pexels.com/photos/27174573/pexels-photo-27174573.jpeg?auto=compress&cs=tinysrgb&h=400&w=400', unit: 'piece' },
  { id: 'i06', name: 'Crocodile Pattern Shoulder Bag', category: 'Bags', price: 27000, oldPrice: 33000, marketId: 'm06', vendorId: 'v12', image: 'https://images.pexels.com/photos/26954376/pexels-photo-26954376.jpeg?auto=compress&cs=tinysrgb&h=400&w=400', unit: 'piece' },
  { id: 'i07', name: 'Red Designer Handbag', category: 'Bags', price: 30000, marketId: 'm01', vendorId: 'v01', image: 'https://images.pexels.com/photos/19869754/pexels-photo-19869754.jpeg?auto=compress&cs=tinysrgb&h=400&w=400', unit: 'piece' },
  { id: 'i08', name: 'Orange Party Bag', category: 'Bags', price: 15000, marketId: 'm19', vendorId: 'v08', image: 'https://images.pexels.com/photos/34976481/pexels-photo-34976481.jpeg?auto=compress&cs=tinysrgb&h=400&w=400', unit: 'piece' },

  // SHOES (6)
  { id: 'i09', name: 'Black & White Block Heels', category: 'Shoes', price: 19500, oldPrice: 25000, marketId: 'm06', vendorId: 'v04', image: 'https://images.pexels.com/photos/27046154/pexels-photo-27046154.jpeg?auto=compress&cs=tinysrgb&h=400&w=400', unit: 'pair' },
  { id: 'i10', name: 'Studio High Heels', category: 'Shoes', price: 23000, marketId: 'm03', vendorId: 'v10', image: 'https://images.pexels.com/photos/27063075/pexels-photo-27063075.jpeg?auto=compress&cs=tinysrgb&h=400&w=400', unit: 'pair' },
  { id: 'i11', name: 'Pink Block Heel Sandals', category: 'Shoes', price: 17500, marketId: 'm11', vendorId: 'v04', image: 'https://images.pexels.com/photos/27113458/pexels-photo-27113458.jpeg?auto=compress&cs=tinysrgb&h=400&w=400', unit: 'pair' },
  { id: 'i12', name: 'Black Stiletto Heels', category: 'Shoes', price: 28000, oldPrice: 35000, marketId: 'm06', vendorId: 'v04', image: 'https://images.pexels.com/photos/27204295/pexels-photo-27204295.jpeg?auto=compress&cs=tinysrgb&h=400&w=400', unit: 'pair' },
  { id: 'i13', name: 'Pink & Blue Heel Set', category: 'Shoes', price: 20000, marketId: 'm01', vendorId: 'v10', image: 'https://images.pexels.com/photos/27113462/pexels-photo-27113462.jpeg?auto=compress&cs=tinysrgb&h=400&w=400', unit: 'pair' },
  { id: 'i14', name: 'Crocodile Pattern Clogs', category: 'Shoes', price: 16000, marketId: 'm19', vendorId: 'v10', image: 'https://images.pexels.com/photos/26965806/pexels-photo-26965806.jpeg?auto=compress&cs=tinysrgb&h=400&w=400', unit: 'pair' },

  // WIGS (6)
  { id: 'i15', name: 'Golden Curly Wig', category: 'Wigs', price: 35000, oldPrice: 45000, marketId: 'm02', vendorId: 'v02', image: 'https://images.pexels.com/photos/157920/woman-face-curly-hair-157920.jpeg?auto=compress&cs=tinysrgb&h=400&w=400', unit: 'piece' },
  { id: 'i16', name: 'Natural Afro Wig', category: 'Wigs', price: 28000, marketId: 'm11', vendorId: 'v07', image: 'https://images.pexels.com/photos/10850675/pexels-photo-10850675.jpeg?auto=compress&cs=tinysrgb&h=400&w=400', unit: 'piece' },
  { id: 'i17', name: 'Afro Volume Wig', category: 'Wigs', price: 30000, marketId: 'm02', vendorId: 'v02', image: 'https://images.pexels.com/photos/10850706/pexels-photo-10850706.jpeg?auto=compress&cs=tinysrgb&h=400&w=400', unit: 'piece' },
  { id: 'i18', name: 'Studio Afro Wig', category: 'Wigs', price: 33000, oldPrice: 40000, marketId: 'm11', vendorId: 'v07', image: 'https://images.pexels.com/photos/10850704/pexels-photo-10850704.jpeg?auto=compress&cs=tinysrgb&h=400&w=400', unit: 'piece' },
  { id: 'i19', name: 'Voluminous Natural Wig', category: 'Wigs', price: 38000, marketId: 'm02', vendorId: 'v07', image: 'https://images.pexels.com/photos/10850674/pexels-photo-10850674.jpeg?auto=compress&cs=tinysrgb&h=400&w=400', unit: 'piece' },
  { id: 'i20', name: 'Smiling Afro Wig', category: 'Wigs', price: 26000, marketId: 'm19', vendorId: 'v02', image: 'https://images.pexels.com/photos/10850673/pexels-photo-10850673.jpeg?auto=compress&cs=tinysrgb&h=400&w=400', unit: 'piece' },

  // CLOTHES (6)
  { id: 'i21', name: 'Pink Blazer Set', category: 'Clothes', price: 25000, oldPrice: 32000, marketId: 'm06', vendorId: 'v03', image: 'https://images.pexels.com/photos/40035694/pexels-photo-40035694.jpeg?auto=compress&cs=tinysrgb&h=400&w=400', unit: 'set' },
  { id: 'i22', name: 'Red Ankara Gown', category: 'Clothes', price: 18000, marketId: 'm11', vendorId: 'v08', image: 'https://images.pexels.com/photos/39654413/pexels-photo-39654413.jpeg?auto=compress&cs=tinysrgb&h=400&w=400', unit: 'piece' },
  { id: 'i23', name: 'Traditional Igbo Attire', category: 'Clothes', price: 22000, marketId: 'm06', vendorId: 'v03', image: 'https://images.pexels.com/photos/16284929/pexels-photo-16284929.jpeg?auto=compress&cs=tinysrgb&h=400&w=400', unit: 'piece' },
  { id: 'i24', name: 'Bridal Dress', category: 'Clothes', price: 65000, oldPrice: 80000, marketId: 'm01', vendorId: 'v08', image: 'https://images.pexels.com/photos/13890478/pexels-photo-13890478.jpeg?auto=compress&cs=tinysrgb&h=400&w=400', unit: 'piece' },
  { id: 'i25', name: 'Casual Dreadlocks Outfit', category: 'Clothes', price: 14000, marketId: 'm19', vendorId: 'v08', image: 'https://images.pexels.com/photos/18153185/pexels-photo-18153185.jpeg?auto=compress&cs=tinysrgb&h=400&w=400', unit: 'piece' },
  { id: 'i26', name: 'Afro Style Smart Outfit', category: 'Clothes', price: 16000, marketId: 'm02', vendorId: 'v03', image: 'https://images.pexels.com/photos/5089372/pexels-photo-5089372.jpeg?auto=compress&cs=tinysrgb&h=400&w=400', unit: 'piece' },

  // FOODSTUFF (8)
  { id: 'i27', name: 'Bag of Rice (50kg)', category: 'Foodstuff', price: 78000, oldPrice: 85000, marketId: 'm01', vendorId: 'v06', image: 'https://images.pexels.com/photos/586615/pexels-photo-586615.jpeg?auto=compress&cs=tinysrgb&h=400&w=400', unit: '50kg bag' },
  { id: 'i28', name: 'Bag of Beans (50kg)', category: 'Foodstuff', price: 95000, marketId: 'm11', vendorId: 'v11', image: 'https://images.pexels.com/photos/36930125/pexels-photo-36930125.jpeg?auto=compress&cs=tinysrgb&h=400&w=400', unit: '50kg bag' },
  { id: 'i29', name: 'Palm Oil (1 Gallon)', category: 'Foodstuff', price: 12500, oldPrice: 15000, marketId: 'm19', vendorId: 'v11', image: 'https://images.pexels.com/photos/16620746/pexels-photo-16620746.jpeg?auto=compress&cs=tinysrgb&h=400&w=400', unit: 'gallon' },
  { id: 'i30', name: 'Palm Oil (25L)', category: 'Foodstuff', price: 48000, marketId: 'm16', vendorId: 'v09', image: 'https://images.pexels.com/photos/16620746/pexels-photo-16620746.jpeg?auto=compress&cs=tinysrgb&h=400&w=400', unit: '25L jerry can' },
  { id: 'i31', name: 'Yam Tuber (Big)', category: 'Foodstuff', price: 3500, marketId: 'm01', vendorId: 'v06', image: 'https://images.pexels.com/photos/9219078/pexels-photo-9219078.jpeg?auto=compress&cs=tinysrgb&h=400&w=400', unit: 'tuber' },
  { id: 'i32', name: 'Sweet Potato (Bag)', category: 'Foodstuff', price: 28000, marketId: 'm19', vendorId: 'v11', image: 'https://images.pexels.com/photos/3807030/pexels-photo-3807030.jpeg?auto=compress&cs=tinysrgb&h=400&w=400', unit: 'bag' },
  { id: 'i33', name: 'Dried Fish (Mangala)', category: 'Foodstuff', price: 8500, oldPrice: 10000, marketId: 'm16', vendorId: 'v09', image: 'https://images.pexels.com/photos/33939170/pexels-photo-33939170.jpeg?auto=compress&cs=tinysrgb&h=400&w=400', unit: 'kg' },
  { id: 'i34', name: 'Fresh Fish (Catfish)', category: 'Foodstuff', price: 6500, marketId: 'm11', vendorId: 'v09', image: 'https://images.pexels.com/photos/14879230/pexels-photo-14879230.jpeg?auto=compress&cs=tinysrgb&h=400&w=400', unit: 'kg' },
];

// ─── Price History for Charts ─────────────────────────────────
function generatePriceHistory(): PricePoint[] {
  const points: PricePoint[] = [];
  const today = new Date();
  const itemMarketPairs: { itemId: string; marketId: string; basePrice: number; volatility: number }[] = [];

  items.forEach((item) => {
    itemMarketPairs.push({
      itemId: item.id,
      marketId: item.marketId,
      basePrice: item.price,
      volatility: Math.max(item.price * 0.05, 500),
    });
  });

  for (let i = 29; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    const dateStr = d.toISOString().split('T')[0];

    itemMarketPairs.forEach((pair) => {
      const seed = (pair.itemId.charCodeAt(1) + i * 7 + pair.basePrice) % 100;
      const variation = ((seed / 100) - 0.5) * 2 * pair.volatility;
      const price = Math.round(Math.max(pair.basePrice + variation, pair.basePrice * 0.7));
      points.push({ itemId: pair.itemId, date: dateStr, price, marketId: pair.marketId });
    });
  }

  return points;
}

export const priceHistory: PricePoint[] = generatePriceHistory();

// ─── Helper Functions ──────────────────────────────────────────
export function getMarketById(id: string): Market | undefined {
  return markets.find((m) => m.id === id);
}

export function getVendorById(id: string): Vendor | undefined {
  return vendors.find((v) => v.id === id);
}

export function getItemsByMarket(marketId: string): Item[] {
  return items.filter((i) => i.marketId === marketId);
}

export function getItemsByVendor(vendorId: string): Item[] {
  return items.filter((i) => i.vendorId === vendorId);
}

export function getVendorsByMarket(marketId: string): Vendor[] {
  return vendors.filter((v) => v.marketId === marketId);
}

export function getCheapestMarketsForItem(itemId: string): { market: Market; price: number }[] {
  const history = priceHistory.filter((p) => p.itemId === itemId);
  const latestDate = history.length > 0
    ? history.reduce((latest, p) => (p.date > latest ? p.date : latest), history[0].date)
    : '';

  const latestPrices = history.filter((p) => p.date === latestDate);
  const result: { market: Market; price: number }[] = [];

  latestPrices.forEach((p) => {
    const market = getMarketById(p.marketId);
    if (market) result.push({ market, price: p.price });
  });

  // Also include the base price from the item itself
  const item = items.find((i) => i.id === itemId);
  if (item) {
    const market = getMarketById(item.marketId);
    if (market && !result.some((r) => r.market.id === market.id)) {
      result.push({ market, price: item.price });
    }
  }

  return result.sort((a, b) => a.price - b.price);
}

export function getItemPriceHistory(itemId: string): { date: string; price: number }[] {
  return priceHistory
    .filter((p) => p.itemId === itemId)
    .sort((a, b) => a.date.localeCompare(b.date))
    .map((p) => ({ date: p.date, price: p.price }));
}

export function getCheapestItemsToday(limit: number = 8): Item[] {
  return items
    .slice()
    .sort((a, b) => {
      const aDiscount = a.oldPrice ? (a.oldPrice - a.price) / a.oldPrice : 0;
      const bDiscount = b.oldPrice ? (b.oldPrice - b.price) / b.oldPrice : 0;
      return bDiscount - aDiscount;
    })
    .slice(0, limit);
}

export function getFeaturedVendors(limit: number = 6): Vendor[] {
  return vendors
    .slice()
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit);
}

export function getItemSearchFields(item: Item): string[] {
  const market = getMarketById(item.marketId);
  const vendor = item.vendorId ? getVendorById(item.vendorId) : undefined;
  return [
    item.name,
    item.category,
    item.unit,
    ...(item.tags ?? []),
    market?.name ?? '',
    market?.lga ?? '',
    market?.state ?? '',
    vendor?.name ?? '',
    vendor?.specialty ?? '',
    vendor?.location ?? '',
  ];
}
