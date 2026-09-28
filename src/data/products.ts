import { Product } from '../types';

export const HERO_PRODUCT: Product = {
  id: 'sculpted-wool-overcoat',
  name: 'Sculpted Wool Overcoat',
  price: 480,
  category: 'outerwear',
  categoryLabel: 'Outerwear',
  rating: 4.9,
  reviewsCount: 142,
  badge: 'New',
  sizes: ['XS', 'S', 'M', 'L'],
  defaultSize: 'M',
  color: 'Camel / Sand',
  image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHV0BzsKMhFcl8C9K9P6R-FtKb_BvZ5f7M1cYUDZb7vXgO8IAr9QT5yJqjSEJVSVrOqeTGHZVUhvJpwoWLRAxKiOszJr-vPGRcpGEKHbr-f7YfCzgBxsjp5K97lgd1vMGLoXViminkT2I4lDy2lexUj_eDU0_tvB5R5Q0SO6j6AHB3IWp6zL379i4h5indW-BVpveqeWW06hUUEm9fBTtFumMM7Xkm5Kdr-Zetz9BIA9Foq3JzU74kjA',
  description: 'Sculptural belted silhouette tailored in double-faced Italian virgin wool. Features architectural notch lapels and clean, unlined interior craftsmanship.',
  details: [
    '100% Virgin Italian Wool (Oeko-Tex Standard 100)',
    'Concealed horn button closure with tonal calfskin belt',
    'Deep welt pockets with hand-stitched reinforcement',
    'Specialist dry clean only'
  ]
};

export const TRENDING_PRODUCTS: Product[] = [
  {
    id: 'cashmere-crewneck',
    name: 'Structured Cashmere Crewneck',
    price: 240,
    category: 'knitwear',
    categoryLabel: 'Knitwear',
    rating: 4.9,
    reviewsCount: 184,
    badge: 'Best Seller',
    sizes: ['S', 'M', 'L'],
    defaultSize: 'M',
    color: 'Oatmeal',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwSaGs-ouqFYIXdl3NZhp7banIDHjHsGXeUv6eLThVKAj_kw6P7lz1NiNYXqErZK1kX97EGUQut71HTGrciG4aqRpCGwcT6gN2d1DecLUhb3V2j17okS7lXsk0wq0ST5_DRSKI_I1SPTCjwicyrgJ0537G7fEOz4h5vLuPiSa_hkO-mNn0ltyt0RBpzzS-jASTaUySTIPASQxWPIXr_9KMNZVD6lq5d1QQsCxvI4Freau7laD1Y8cAMQ',
    description: 'Substantial 7-gauge Scottish cashmere knit with architectural dropped shoulder and tensioned rib cuffs for enduring structure.',
    details: [
      '100% Grade-A Mongolian Cashmere',
      'Dense 2-ply rib knit construction',
      'Pre-washed with Alpine water for ultra-soft finish'
    ]
  },
  {
    id: 'pleated-wide-leg-trouser',
    name: 'Pleated Wide-Leg Trouser',
    price: 290,
    originalPrice: 340,
    category: 'tailoring',
    categoryLabel: 'Tailoring',
    rating: 4.8,
    reviewsCount: 92,
    badge: 'Sale',
    sizes: ['30', '32', '34'],
    defaultSize: '30',
    color: 'Deep Navy',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBd1gPbqO82zuLRqYNvJeiA7kmuP7W8TNS5N5x28h5f4LzwAHia18r-j4OrlWWJroIWWL15bdnuW5DCgheVgV-250-ORVLB4IzaFDgdpW2_sPnmiNRnVAQqYhvAunv7WWeTIm9KK-bOWJ6XwQoiYlwoiTk9w87Y3u5WHAgn7u2mQx8Lxbixk2mpo22kV9ssd21QYyLDZHk-5zEE5HOxJ8CmpGxgUeW7YGwcaUm55jY56wOlY7r67wK-5Q',
    description: 'Crisp double-pleat tailored trousers draped from high-twist tropical wool. Generous architectural leg with blind-stitched hem.',
    details: [
      '100% Super 120s High-Twist Tropical Wool',
      'Internal curtain waistband with dual button fastening',
      'Slanted front pockets, back welt pockets'
    ]
  },
  {
    id: 'architectural-trench',
    name: 'The Architectural Trench',
    price: 520,
    category: 'outerwear',
    categoryLabel: 'Outerwear',
    rating: 5.0,
    reviewsCount: 64,
    badge: 'New',
    sizes: ['XS', 'S', 'M'],
    defaultSize: 'XS',
    color: 'Classic Trench Sand',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZg8X_tjnEKMqsPnXGLsGjkuILEIrKGFvIpifLeEVfgK3rUHv3rhDVtgGYZU5opXT_JI7ANbXvWYUQhyMSMK9OSiL--GHGtE8UiDWQDqxaDYl1HGFMekGsjJxo0hmHyLX0EvaOPccVCA_DIv9FAmlfK9AG7Dvm9KAAZB-rd25dBJdY5ofxf1tOD1Sa96_zJUjYLOOpMd1vWm0Qt3xxc6LSLXiAW-EE26S5O4cfdgnW9Qr_fVvklXp_3A',
    description: 'Double-breasted storm trench engineered from bonded weatherproof cotton gabardine. Cut with sharp geometric proportions and gun flap detail.',
    details: [
      '100% Weatherproof Compact Cotton Gabardine',
      'Real horn double-breasted buttons',
      'Storm shield yoke with magnetic throat latch'
    ]
  },
  {
    id: 'calfskin-minimalist-loafer',
    name: 'Calfskin Minimalist Loafer',
    price: 340,
    category: 'footwear',
    categoryLabel: 'Footwear',
    rating: 4.9,
    reviewsCount: 112,
    badge: 'Trending',
    sizes: ['41', '42', '43'],
    defaultSize: '41',
    color: 'Nero Black',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAukaQHom94HnZXpNpjCxqmm1I8tPDxMUvcFPZ8qhXwE5U5NSTjg2aRKouEPKXrIE4rvTE1CMbzJU88itFvpY0QPWnYhEJFtLiaqe3AKSBQyJhdtiUzUvzDI07OQuR5ZQ_HIE2BFfS9zVY4u9ttzWYTG_ejS_A2Qqxxnb8veDA_VPfM41e0A1T1bPFj9FBNOfYo0XIMZY1sZaV_UFuUTmH3d0tS7O4JN88idHFGApFnDXxGERsZGXU8xA',
    description: 'Blake-stitched penny loafer hand-buffed from full-grain Tuscan calfskin. Features beveled waist and stacked leather heel.',
    details: [
      '100% Full-Grain Vegetable-Tanned Tuscan Calfskin',
      'Blake welt construction for maximum flexibility',
      'Hand-painted channeled leather sole'
    ]
  }
];

export const JUST_IN_PRODUCTS: Product[] = [
  {
    id: 'merino-mockneck-sweater',
    name: 'Merino Mockneck Rib Sweater',
    price: 195,
    category: 'knitwear',
    categoryLabel: 'Knitwear',
    rating: 4.8,
    reviewsCount: 76,
    sizes: ['XS', 'S', 'M', 'L'],
    defaultSize: 'M',
    color: 'Dark Chocolate',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfbhEkMi0TzXLPKXNup_x9tVWvud71ge42aeWwhCLzct8uEfdNmd0IEdaWO6CuL97UPuy_ZWvTDbmbkj0l2X8o5CS16xz5nEUrnFdQhFtCZxl86aZb7CbtUiKF1uT0UZmYCYEXYwCGJ3slA7XytKvBCl8y2gVTCr3fbNZrXfGP_ky7PdsmMFKAdJQPzXaBtu0m0u2T0LHR2N-6s-ShtuQr2C4BjMNchV5hu1ZK2p_0DeMOgKzp_fW6rg',
    description: 'Sculpted fine-gauge ribbed sweater spun from extra-fine 19.5-micron Australian merino wool with comfortable mockneck silhouette.',
    details: [
      '100% Extra-Fine Australian Merino Wool',
      'Seamless 3D knit technology',
      'Naturally thermo-regulating and wrinkle-resistant'
    ]
  },
  {
    id: 'structured-leather-crossbody',
    name: 'Structured Leather Crossbody',
    price: 360,
    category: 'accessories',
    categoryLabel: 'Accessories',
    rating: 4.9,
    reviewsCount: 53,
    sizes: ['One Size'],
    defaultSize: 'One Size',
    color: 'Cognac Tan',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAF4JUMqqysl03Co6vaScxijd8LYQZZP3PdVNueWPKzgdducyJ9YC1EWv1bq4KL3dASyeqS7D4CpO1JbqKV_Su-iaUnnv3x18zaX0UrRprJ3RCgTNU8UfjtJpOH0Vlbezmq-rWHcpR4acNx7ZmEi71B94-zj_TPXmBm-ZJiNNimQ-rCG5QiuZDsO6nPbcjNxHBziJVSlkZPeF8r_3U3pzeEJsYY6GhbsYv33mF2eQfoYd6xgianshxkXw',
    description: 'Boxy geometric flap handbag handcrafted in Florence from smooth vegetable-tanned box calf with brushed palladium turn-lock.',
    details: [
      '100% Italian Vegetable-Tanned Box Calfskin',
      'Brushed palladium architectural clasp',
      'Adjustable leather shoulder strap (48cm - 58cm drop)'
    ]
  },
  {
    id: 'raw-denim-relaxed-jean',
    name: 'Raw Denim Relaxed Jean',
    price: 180,
    category: 'denim',
    categoryLabel: 'Denim',
    rating: 4.7,
    reviewsCount: 41,
    sizes: ['28', '30', '32', '34'],
    defaultSize: '32',
    color: 'Raw Indigo',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBaXOM66ZdCKFzADKBxy8_vHcqJJRogcBrCQOvXNsUooZHsZe4Ds6Z3fsvplp_I1gNDEIsuCAPolyivQfipvIQJMdFDewV_BH19KlhznmMyWNV6UFQJijIdtuE-UQyN7HATrmV2DYKRiJarr1USm0aNeZakNIowWCXiDwBuK76LZadXnGLRfAGpVHYCDBSXlAL1ZJQt5zq6xrF3bXM1MsYuozxs3bO18oOb8U-EPfMMXfXykpAVjTCYHA',
    description: '14oz Japanese selvedge denim woven on vintage Toyoda shuttle looms in Okayama. Pure indigo dyed with clean relaxed straight leg.',
    details: [
      '100% Okayama Selvedge Cotton (14oz)',
      'Custom gunmetal rivets and donut button fly',
      'Pink selvedge ID line along outseam'
    ]
  },
  {
    id: 'brushed-alpaca-scarf',
    name: 'Brushed Alpaca Scarf',
    price: 130,
    category: 'accessories',
    categoryLabel: 'Accessories',
    rating: 4.9,
    reviewsCount: 88,
    sizes: ['One Size'],
    defaultSize: 'One Size',
    color: 'Camel & Ivory',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBuRy6FOPotZEpIpLSgm8p6CxFLkasmcgVk1SibrDNnFLy_s8sD6z35Q8gPSnYcj1t63bo3ALa8Jg8DjUXOQaSDmUblUkUqLbaSnEC_nnnDuhz-vUVl4z8QQSM14377oOgO8HsaOfsBBh3fyjVdkoqaCcu_p5QHvKycrilRg7_GXbmH_5hSDTqpE9BDPFmREJeYD4t6o6ZzdIyaGyeatVCJDg4fuF_gvCbNN-ki-aqfaO90xMIfzuMI6w',
    description: 'Generously scaled fringed blanket scarf spun from Peruvian baby alpaca and organic wool, brushed for cloud-like softness.',
    details: [
      '80% Peruvian Baby Alpaca, 20% Organic Merino Wool',
      '200cm × 45cm with 10cm hand-twisted fringes',
      'Hypoallergenic and thermally insulating'
    ]
  }
];

export const ADDON_PRODUCT: Product = {
  id: 'signature-scented-linen-mist',
  name: 'Signature Scented Linen Mist',
  price: 35,
  category: 'accessories',
  categoryLabel: 'Fragrance',
  rating: 4.9,
  sizes: ['100ml'],
  defaultSize: '100ml',
  color: 'Amber Cedar & Fig',
  image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1ocmS40JDqWp-nHX9vD_shH-mM8G5pvjqh9fxd6RMV_aH5fm4wyvaN7lZ9J9s2R3VUpqqIBw7zy3hkPP7XI8-N4AfZ4ZiRcpvLEdcHxXzdGef5I9Co4DPA4V8Y6AgbOnArESuZPUd8P4DbF7GTkzqqsUm27ZgiQAvefn7qEa_pzI2z-QNQPN2rcxKGQYlF9X1nzLErqdPJP1evWcmUAxrNDG8kK-nGZAopWY1kODJFcjH0dZ9muffOQ',
  description: 'Botanical fabric mist infused with notes of Mediterranean fig leaf, dry cedarwood, and white amber for garment revitalization.',
  details: ['100ml spray bottle', 'Organic alcohol base', 'Essential oils from Grasse']
};

export const ALL_PRODUCTS: Product[] = [
  HERO_PRODUCT,
  ...TRENDING_PRODUCTS,
  ...JUST_IN_PRODUCTS,
  ADDON_PRODUCT
];

export const CATEGORIES_DATA = [
  {
    id: 'women',
    title: 'Women',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOva8SbuXdqlXPRCzLxz2UCHdR-2hkPkyNpFzJXvO-qAASZdRLeEDqRfjXPGrfDMTxqtWGi7nqCkNGwQQSQKQSE_-kXEBwn3Sci-kEfH5LFrQfK0YDAor3BKNHoskmlBqx8KEfXEKEFfHsRb1GYSFCx2lNGo8xuTnvzS6e9YCO9ibRXSuIadkONbPM64h_aJC1jq6on1ZPRppQ6clPzgvunXBcKLCq5K5mQy_sbG-esBlh1cjtrinJwQ',
    alt: 'High fashion female model in sand-toned sculptural trench coat'
  },
  {
    id: 'men',
    title: 'Men',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBsFLuKfBsDI64R0UKa8IdOpsFPVXbkY-p-u1qe6FZhUTZyTXwKXp6j4gdBcXW0SXyXvdVxbD90WPHwh9ziHPGGuCtcZYX4V4SJ_NR6zKUxOkak5kyLxybvtOgLZMuBjNSUWxH74D6Bzk5ZYHMKDDYtFYuIFVdaQq69LSKOTSajtXshHOu_pCAPZ3ccjIC0fYxg-bsvz7Br208Q30n_Dnt96Fdf3dSowXzWhpkkv6KCYKbUI-BYh38LFQ',
    alt: 'Minimalist portrait of handsome male model in cream cashmere crewneck'
  },
  {
    id: 'shoes',
    title: 'Shoes',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTYZTHc4nOqh28UZaxJPVsEFrTHMlGLKEZkynYs3nG0NkDu6OS2S8gM6ERG__H4VC22GWcJfbVZ3C7v1gloJUsVioOVVnUD_UcTfIGxOO3TEOzuJpFPyEaoUhfvkTPSFT_9hV-emEJgiwY45segYV83U_uT502ktyp1ZTSo3m2fL7iFTeQqrFZRUUe1zyZnev-MVDmQRoydRhRloQtlYJPmco-qAHgB_Wxk3RyxB0VAFsW1RQAl43nWQ',
    alt: 'Artisanal black calfskin minimalist loafers and boots'
  },
  {
    id: 'accessories',
    title: 'Accessories',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1ocmS40JDqWp-nHX9vD_shH-mM8G5pvjqh9fxd6RMV_aH5fm4wyvaN7lZ9J9s2R3VUpqqIBw7zy3hkPP7XI8-N4AfZ4ZiRcpvLEdcHxXzdGef5I9Co4DPA4V8Y6AgbOnArESuZPUd8P4DbF7GTkzqqsUm27ZgiQAvefn7qEa_pzI2z-QNQPN2rcxKGQYlF9X1nzLErqdPJP1evWcmUAxrNDG8kK-nGZAopWY1kODJFcjH0dZ9muffOQ',
    alt: 'Structured tan luxury Italian leather tote bag and sunglasses'
  }
];
