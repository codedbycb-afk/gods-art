// First-run seed. Everything here is editable by Jay (@wh0jay_1607) in the shop app
// (Settings) — these are starting values, not the source of truth.
                                               

                       
                                                         
                                       
                                                                                         
                                                               
  

export const DEFAULT_SERVICES            = [
  { id: "auto-tint", name: "Window Tint", short: "Tint", kind: "vehicle", options: "tint", online: true, durationMin: 150,
    blurb: "Better privacy, blocks heat, looks cleaner. Carbon or ceramic film in any shade, 5% to 70%." },
  { id: "wrap", name: "Car Wrap", short: "Full wrap", kind: "vehicle", online: true, durationMin: 480,
    blurb: "Custom colors that protect your factory paint and make the car stand out. Full wraps are a drop-off job." },
  { id: "wrap-accents", name: "Wrap Accents & Chrome Delete", short: "Accents", kind: "vehicle", online: true, durationMin: 180,
    blurb: "Roof, hood, mirrors, stripes, and blacked-out trim and badges. Gloss, satin or matte." },
  { id: "detail", name: "Deep Clean Detail", short: "Detail", kind: "vehicle", online: true, durationMin: 180,
    blurb: "Inside and out. Seats, carpets, vents, door jambs, wheels and a hand wash finish." },
  { id: "paint-correction", name: "Paint Restoration", short: "Paint correction", kind: "vehicle", online: true, durationMin: 240,
    blurb: "Machine polish that pulls out swirls, scratches and haze, then sealant for a long-lasting shine." },
];

const day = (start        , end        ) => [{ start, end }];
export const DEFAULT_HOURS        = {
  // Sun .. Sat. Placeholder hours until Jay posts his own in the app.
  weekly: [[], day("10:00", "19:00"), day("10:00", "19:00"), day("10:00", "19:00"), day("10:00", "19:00"), day("10:00", "19:00"), day("09:00", "17:00")],
  overrides: {},
};

export const DEFAULT_RULES        = { stepMin: 30, bufferMin: 15, minNoticeMin: 120, maxDaysOut: 60 };

                        
                                                                
                                                                
                                                                                                 
  

export const DEFAULT_BUSINESS           = {
  name: "God's Art",
  owner: "Jay",
  phone: "",       // Jay adds his number in Settings → Shop info. Until then the site sends people to his IG DMs.
  instagram: "wh0jay_1607",
  city: "Cleveland, OH",
  locations: [],   // Jay adds the shop address(es) in Settings → Shop info
  depositAmount: 25,
  depositNote: "A $25 non-refundable deposit locks in your appointment.",
  depositMethods: [],  // e.g. { label: "Cash App", value: "$godsart" }
};
