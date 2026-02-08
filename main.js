'use strict';

/**
 * Static index of folders and JSON files that can be viewed.
 * Paths are relative to index.html.
 */
const FILE_INDEX = [
    {
        label: 'Aftercare',
        kind: 'aftercare-root',
        groups: [
            {
                label: 'Beauty',
                kind: 'aftercare',
                files: [
                    { name: 'Acne treatment facial', path: 'aftercare/Beauty/Acne treatment facial.json', type: 'aftercare' },
                    { name: 'Anti-ageing facial', path: 'aftercare/Beauty/Anti-ageing facial.json', type: 'aftercare' },
                    { name: 'Carbon laser facial', path: 'aftercare/Beauty/Carbon laser facial.json', type: 'aftercare' },
                    { name: 'Chemical peels', path: 'aftercare/Beauty/Chemical peels.json', type: 'aftercare' },
                    { name: 'Deep cleansing facial', path: 'aftercare/Beauty/Deep cleansing facial.json', type: 'aftercare' },
                    { name: 'Dermaplaning', path: 'aftercare/Beauty/Dermaplaning.json', type: 'aftercare' },
                    { name: 'Hydrating facial', path: 'aftercare/Beauty/Hydrating facial.json', type: 'aftercare' },
                    { name: 'LED light therapy', path: 'aftercare/Beauty/LED light therapy.json', type: 'aftercare' },
                    { name: 'Microneedling', path: 'aftercare/Beauty/Microneedling.json', type: 'aftercare' },
                    { name: 'Oxygen facial', path: 'aftercare/Beauty/Oxygen facial.json', type: 'aftercare' },
                    { name: 'Sugaring', path: 'aftercare/Beauty/Sugaring.json', type: 'aftercare' },
                    { name: 'Threading', path: 'aftercare/Beauty/Threading.json', type: 'aftercare' },
                    { name: 'Waxing (face & body)', path: 'aftercare/Beauty/Waxing (face & body).json', type: 'aftercare' }
                ]
            },
            {
                label: 'Cosmetics',
                kind: 'aftercare',
                files: [
                    { name: 'Anti-wrinkle injections', path: 'aftercare/Cosmetics/Anti-wrinkle injections.json', type: 'aftercare' },
                    { name: 'Bum filler', path: 'aftercare/Cosmetics/Bum filler.json', type: 'aftercare' },
                    { name: 'Dermal fillers', path: 'aftercare/Cosmetics/Dermal fillers.json', type: 'aftercare' },
                    { name: 'Fat dissolving injections', path: 'aftercare/Cosmetics/Fat dissolving injections.json', type: 'aftercare' },
                    { name: 'Lumi Eye', path: 'aftercare/Cosmetics/Lumi Eye.json', type: 'aftercare' },
                    { name: 'Mesotherapy', path: 'aftercare/Cosmetics/Mesotherapy.json', type: 'aftercare' },
                    { name: 'Polynucleotides', path: 'aftercare/Cosmetics/Polynucleotides.json', type: 'aftercare' },
                    { name: 'Profhilo', path: 'aftercare/Cosmetics/Profhilo.json', type: 'aftercare' },
                    { name: 'PRP (Vampire Facial)', path: 'aftercare/Cosmetics/PRP (Vampire Facial).json', type: 'aftercare' },
                    { name: 'Skin booster', path: 'aftercare/Cosmetics/Skin booster.json', type: 'aftercare' }
                ]
            },
            {
                label: 'Face',
                kind: 'aftercare',
                files: [
                    { name: 'Airbrush makeup', path: 'aftercare/Face/Airbrush makeup.json', type: 'aftercare' },
                    { name: 'Brow lamination', path: 'aftercare/Face/Brow lamination.json', type: 'aftercare' },
                    { name: 'Eyebrow shaping', path: 'aftercare/Face/Eyebrow shaping.json', type: 'aftercare' },
                    { name: 'Eyebrow tinting', path: 'aftercare/Face/Eyebrow tinting.json', type: 'aftercare' },
                    { name: 'Eyelash extensions', path: 'aftercare/Face/Eyelash extensions.json', type: 'aftercare' },
                    { name: 'Eyeliner', path: 'aftercare/Face/Eyeliner.json', type: 'aftercare' },
                    { name: 'Lash lift', path: 'aftercare/Face/Lash lift.json', type: 'aftercare' },
                    { name: 'Lash tint', path: 'aftercare/Face/Lash tint.json', type: 'aftercare' },
                    { name: 'Lip blush', path: 'aftercare/Face/Lip blush.json', type: 'aftercare' },
                    { name: 'Microblading', path: 'aftercare/Face/Microblading.json', type: 'aftercare' },
                    { name: 'Permanent makeup (PMU)', path: 'aftercare/Face/Permanent makeup (PMU).json', type: 'aftercare' },
                    { name: 'Powder brows', path: 'aftercare/Face/Powder brows.json', type: 'aftercare' },
                    { name: 'Under-eye treatments', path: 'aftercare/Face/Under-eye treatments.json', type: 'aftercare' }
                ]
            },
            {
                label: 'Hair',
                kind: 'aftercare',
                files: [
                    { name: 'Blow dry', path: 'aftercare/Hair/Blow dry.json', type: 'aftercare' },
                    { name: 'Hair botox', path: 'aftercare/Hair/Hair botox.json', type: 'aftercare' },
                    { name: 'Hair treatments', path: 'aftercare/Hair/Hair treatments.json', type: 'aftercare' },
                    { name: 'Scalp detox', path: 'aftercare/Hair/Scalp detox.json', type: 'aftercare' }
                ]
            },
            {
                label: 'Laser – Body Contouring & Fat Reduction',
                kind: 'aftercare',
                files: [
                    { name: 'Cellulite laser treatment', path: 'aftercare/Laser/Body Contouring & Fat Reduction/Cellulite laser treatment.json', type: 'aftercare' },
                    { name: 'Laser lipolysis', path: 'aftercare/Laser/Body Contouring & Fat Reduction/Laser lipolysis.json', type: 'aftercare' },
                    { name: 'Laser-assisted fat reduction', path: 'aftercare/Laser/Body Contouring & Fat Reduction/Laser-assisted fat reduction.json', type: 'aftercare' },
                    { name: 'Skin tightening post-fat reduction', path: 'aftercare/Laser/Body Contouring & Fat Reduction/Skin tightening post-fat reduction.json', type: 'aftercare' }
                ]
            },
            {
                label: 'Laser – Laser Acne Treatments',
                kind: 'aftercare',
                files: [
                    { name: 'Acne bacteria reduction (laser)', path: 'aftercare/Laser/Laser Acne Treatments/Acne bacteria reduction (laser).json', type: 'aftercare' },
                    { name: 'Acne scar laser treatment', path: 'aftercare/Laser/Laser Acne Treatments/Acne scar laser treatment.json', type: 'aftercare' },
                    { name: 'Active acne laser treatment', path: 'aftercare/Laser/Laser Acne Treatments/Active acne laser treatment.json', type: 'aftercare' },
                    { name: 'Post-acne redness treatment', path: 'aftercare/Laser/Laser Acne Treatments/Post-acne redness treatment.json', type: 'aftercare' },
                    { name: 'Sebum control laser therapy', path: 'aftercare/Laser/Laser Acne Treatments/Sebum control laser therapy.json', type: 'aftercare' }
                ]
            },
            {
                label: 'Laser – Laser Hair Removal',
                kind: 'aftercare',
                files: [
                    { name: 'Beard shaping (laser)', path: 'aftercare/Laser/Laser Hair Removal/Beard shaping (laser).json', type: 'aftercare' },
                    { name: 'Bikini (Brazilian) laser', path: 'aftercare/Laser/Laser Hair Removal/Bikini (Brazilian) laser.json', type: 'aftercare' },
                    { name: 'Full-body laser hair removal', path: 'aftercare/Laser/Laser Hair Removal/Full-body laser hair removal.json', type: 'aftercare' },
                    { name: 'Ingrown hair reduction (laser)', path: 'aftercare/Laser/Laser Hair Removal/Ingrown hair reduction (laser).json', type: 'aftercare' },
                    { name: 'Laser hair reduction', path: 'aftercare/Laser/Laser Hair Removal/Laser hair reduction.json', type: 'aftercare' },
                    { name: 'Laser hair removal', path: 'aftercare/Laser/Laser Hair Removal/Laser hair removal.json', type: 'aftercare' }
                ]
            },
            {
                label: 'Laser – Laser Resurfacing',
                kind: 'aftercare',
                files: [
                    { name: 'Ablative laser resurfacing', path: 'aftercare/Laser/Laser Resurfacing/Ablative laser resurfacing.json', type: 'aftercare' },
                    { name: 'CO₂ laser resurfacing', path: 'aftercare/Laser/Laser Resurfacing/CO₂ laser resurfacing.json', type: 'aftercare' },
                    { name: 'Er YAG laser resurfacing', path: 'aftercare/Laser/Laser Resurfacing/Er YAG laser resurfacing.json', type: 'aftercare' },
                    { name: 'Fractional laser resurfacing', path: 'aftercare/Laser/Laser Resurfacing/Fractional laser resurfacing.json', type: 'aftercare' },
                    { name: 'Laser skin renewal', path: 'aftercare/Laser/Laser Resurfacing/Laser skin renewal.json', type: 'aftercare' },
                    { name: 'Non-ablative laser resurfacing', path: 'aftercare/Laser/Laser Resurfacing/Non-ablative laser resurfacing.json', type: 'aftercare' }
                ]
            },
            {
                label: 'Laser – Laser Skin Rejuvenation',
                kind: 'aftercare',
                files: [
                    { name: 'Collagen stimulation, laser', path: 'aftercare/Laser/Laser Skin Rejuvenation/Collagen stimulation, laser.json', type: 'aftercare' },
                    { name: 'Fine line & wrinkle reduction', path: 'aftercare/Laser/Laser Skin Rejuvenation/Fine line & wrinkle reduction.json', type: 'aftercare' },
                    { name: 'Laser facial', path: 'aftercare/Laser/Laser Skin Rejuvenation/Laser facial.json', type: 'aftercare' },
                    { name: 'Laser skin rejuvenation', path: 'aftercare/Laser/Laser Skin Rejuvenation/Laser skin rejuvenation.json', type: 'aftercare' },
                    { name: 'Pore reduction, laser', path: 'aftercare/Laser/Laser Skin Rejuvenation/Pore reduction, laser.json', type: 'aftercare' },
                    { name: 'Skin texture refinement', path: 'aftercare/Laser/Laser Skin Rejuvenation/Skin texture refinement.json', type: 'aftercare' }
                ]
            },
            {
                label: 'Laser – Laser Skin Tightening & Lifting',
                kind: 'aftercare',
                files: [
                    { name: 'Body skin tightening', path: 'aftercare/Laser/Laser Skin Tightening & Lifting/Body skin tightening.json', type: 'aftercare' },
                    { name: 'Eye area tightening', path: 'aftercare/Laser/Laser Skin Tightening & Lifting/Eye area tightening.json', type: 'aftercare' },
                    { name: 'Jawline tightening', path: 'aftercare/Laser/Laser Skin Tightening & Lifting/Jawline tightening.json', type: 'aftercare' },
                    { name: 'Laser skin firming', path: 'aftercare/Laser/Laser Skin Tightening & Lifting/Laser skin firming.json', type: 'aftercare' },
                    { name: 'Neck tightening', path: 'aftercare/Laser/Laser Skin Tightening & Lifting/Neck tightening.json', type: 'aftercare' },
                    { name: 'Non-surgical skin tightening (laser)', path: 'aftercare/Laser/Laser Skin Tightening & Lifting/Non-surgical skin tightening (laser).json', type: 'aftercare' }
                ]
            },
            {
                label: 'Laser – Laser-Based Combination Treatments',
                kind: 'aftercare',
                files: [
                    { name: 'Laser + chemical peel protocols', path: 'aftercare/Laser/Laser-Based Combination Treatments/Laser + chemical peel protocols.json', type: 'aftercare' },
                    { name: 'Laser + microneedling', path: 'aftercare/Laser/Laser-Based Combination Treatments/Laser + microneedling.json', type: 'aftercare' },
                    { name: 'Laser + PRP', path: 'aftercare/Laser/Laser-Based Combination Treatments/Laser + PRP.json', type: 'aftercare' },
                    { name: 'Laser + skin boosters', path: 'aftercare/Laser/Laser-Based Combination Treatments/Laser + skin boosters.json', type: 'aftercare' }
                ]
            },
            {
                label: 'Laser – Medical, Dermatological Laser Treatments',
                kind: 'aftercare',
                files: [
                    { name: 'Benign lesion removal', path: 'aftercare/Laser/Medical, Dermatological Laser Treatments/Benign lesion removal.json', type: 'aftercare' },
                    { name: 'Laser mole removal', path: 'aftercare/Laser/Medical, Dermatological Laser Treatments/Laser mole removal.json', type: 'aftercare' },
                    { name: 'Laser skin tag removal', path: 'aftercare/Laser/Medical, Dermatological Laser Treatments/Laser skin tag removal.json', type: 'aftercare' },
                    { name: 'Laser wart removal', path: 'aftercare/Laser/Medical, Dermatological Laser Treatments/Laser wart removal.json', type: 'aftercare' },
                    { name: 'Nail fungus treatment (laser)', path: 'aftercare/Laser/Medical, Dermatological Laser Treatments/Nail fungus treatment (laser).json', type: 'aftercare' },
                    { name: 'Psoriasis laser therapy', path: 'aftercare/Laser/Medical, Dermatological Laser Treatments/Psoriasis laser therapy.json', type: 'aftercare' },
                    { name: 'Vitiligo laser therapy', path: 'aftercare/Laser/Medical, Dermatological Laser Treatments/Vitiligo laser therapy.json', type: 'aftercare' }
                ]
            },
            {
                label: 'Laser – Pigmentation & Sun Damage',
                kind: 'aftercare',
                files: [
                    { name: 'Age spot removal', path: 'aftercare/Laser/Pigmentation & Sun Damage/Age spot removal.json', type: 'aftercare' },
                    { name: 'Freckle reduction', path: 'aftercare/Laser/Pigmentation & Sun Damage/Freckle reduction.json', type: 'aftercare' },
                    { name: 'Laser pigmentation removal', path: 'aftercare/Laser/Pigmentation & Sun Damage/Laser pigmentation removal.json', type: 'aftercare' },
                    { name: 'Melasma management (laser-assisted)', path: 'aftercare/Laser/Pigmentation & Sun Damage/Melasma management (laser-assisted).json', type: 'aftercare' },
                    { name: 'Sun spot treatment', path: 'aftercare/Laser/Pigmentation & Sun Damage/Sun spot treatment.json', type: 'aftercare' },
                    { name: 'Uneven skin tone correction', path: 'aftercare/Laser/Pigmentation & Sun Damage/Uneven skin tone correction.json', type: 'aftercare' }
                ]
            },
            {
                label: 'Laser – Scar & Stretch Mark Treatments',
                kind: 'aftercare',
                files: [
                    { name: 'Keloid scar management (laser-assisted)', path: 'aftercare/Laser/Scar & Stretch Mark Treatments/Keloid scar management (laser-assisted).json', type: 'aftercare' },
                    { name: 'Laser scar reduction', path: 'aftercare/Laser/Scar & Stretch Mark Treatments/Laser scar reduction.json', type: 'aftercare' },
                    { name: 'Stretch mark reduction (laser)', path: 'aftercare/Laser/Scar & Stretch Mark Treatments/Stretch mark reduction (laser).json', type: 'aftercare' },
                    { name: 'Surgical scar treatment', path: 'aftercare/Laser/Scar & Stretch Mark Treatments/Surgical scar treatment.json', type: 'aftercare' },
                    { name: 'Trauma scar treatment', path: 'aftercare/Laser/Scar & Stretch Mark Treatments/Trauma scar treatment.json', type: 'aftercare' }
                ]
            },
            {
                label: 'Laser – Specialist, Advanced Laser',
                kind: 'aftercare',
                files: [
                    { name: 'Laser pore sealing', path: 'aftercare/Laser/Specialist, Advanced Laser/Laser pore sealing.json', type: 'aftercare' },
                    { name: 'Laser rejuvenation for intimate areas', path: 'aftercare/Laser/Specialist, Advanced Laser/Laser rejuvenation for intimate areas.json', type: 'aftercare' },
                    { name: 'Laser skin bleaching', path: 'aftercare/Laser/Specialist, Advanced Laser/Laser skin bleaching.json', type: 'aftercare' },
                    { name: 'Laser sweat reduction (hyperhidrosis)', path: 'aftercare/Laser/Specialist, Advanced Laser/Laser sweat reduction (hyperhidrosis).json', type: 'aftercare' }
                ]
            },
            {
                label: 'Laser – Tattoo & PMU Removal',
                kind: 'aftercare',
                files: [
                    { name: 'Eyebrow tattoo removal', path: 'aftercare/Laser/Tattoo & PMU Removal/Eyebrow tattoo removal.json', type: 'aftercare' },
                    { name: 'Laser tattoo removal', path: 'aftercare/Laser/Tattoo & PMU Removal/Laser tattoo removal.json', type: 'aftercare' },
                    { name: 'Lip blush tattoo removal', path: 'aftercare/Laser/Tattoo & PMU Removal/Lip blush tattoo removal.json', type: 'aftercare' },
                    { name: 'Microblading removal (laser)', path: 'aftercare/Laser/Tattoo & PMU Removal/Microblading removal (laser).json', type: 'aftercare' },
                    { name: 'Multi-colour tattoo removal', path: 'aftercare/Laser/Tattoo & PMU Removal/Multi-colour tattoo removal.json', type: 'aftercare' },
                    { name: 'Permanent makeup removal', path: 'aftercare/Laser/Tattoo & PMU Removal/Permanent makeup removal.json', type: 'aftercare' }
                ]
            },
            {
                label: 'Laser – Vascular & Redness Treatments',
                kind: 'aftercare',
                files: [
                    { name: 'Broken capillary removal', path: 'aftercare/Laser/Vascular & Redness Treatments/Broken capillary removal.json', type: 'aftercare' },
                    { name: 'Cherry angioma removal', path: 'aftercare/Laser/Vascular & Redness Treatments/Cherry angioma removal.json', type: 'aftercare' },
                    { name: 'Facial redness reduction', path: 'aftercare/Laser/Vascular & Redness Treatments/Facial redness reduction.json', type: 'aftercare' },
                    { name: 'Laser thread vein removal', path: 'aftercare/Laser/Vascular & Redness Treatments/Laser thread vein removal.json', type: 'aftercare' },
                    { name: 'Rosacea laser treatment', path: 'aftercare/Laser/Vascular & Redness Treatments/Rosacea laser treatment.json', type: 'aftercare' },
                    { name: 'Spider vein treatment', path: 'aftercare/Laser/Vascular & Redness Treatments/Spider vein treatment.json', type: 'aftercare' }
                ]
            },
            {
                label: 'Massage',
                kind: 'aftercare',
                files: [
                    { name: 'Aromatherapy massage', path: 'aftercare/Massage/Aromatherapy_massage.json', type: 'aftercare' },
                    { name: 'Deep tissue massage', path: 'aftercare/Massage/Deep_tissue_massage.json', type: 'aftercare' },
                    { name: 'Head, neck & shoulder massage', path: 'aftercare/Massage/Head,_neck_&_shoulder_massage.json', type: 'aftercare' },
                    { name: 'Hot stone massage', path: 'aftercare/Massage/Hot_stone_massage.json', type: 'aftercare' },
                    { name: 'Reflexology', path: 'aftercare/Massage/Reflexology.json', type: 'aftercare' },
                    { name: 'Swedish massage', path: 'aftercare/Massage/Swedish_massage.json', type: 'aftercare' }
                ]
            },
            {
                label: 'Skin',
                kind: 'aftercare',
                files: [
                    { name: 'Acne control facial', path: 'aftercare/Skin/Acne_control_facial.json', type: 'aftercare' },
                    { name: 'Anti-ageing facial', path: 'aftercare/Skin/Anti-ageing_facial.json', type: 'aftercare' },
                    { name: 'Brightening facial', path: 'aftercare/Skin/Brightening_facial.json', type: 'aftercare' },
                    { name: 'Calming / barrier-repair facial', path: 'aftercare/Skin/Calming___barrier-repair_facial.json', type: 'aftercare' },
                    { name: 'Carbon laser facial', path: 'aftercare/Skin/Carbon_laser_facial.json', type: 'aftercare' },
                    { name: 'Chemical peels', path: 'aftercare/Skin/Chemical_peels.json', type: 'aftercare' },
                    { name: 'Deep cleansing facial', path: 'aftercare/Skin/Deep_cleansing_facial.json', type: 'aftercare' },
                    { name: 'Deep peels', path: 'aftercare/Skin/Deep_peels.json', type: 'aftercare' },
                    { name: 'Enzyme peels', path: 'aftercare/Skin/Enzyme_peels.json', type: 'aftercare' },
                    { name: 'Glycolic peel', path: 'aftercare/Skin/Glycolic_peel.json', type: 'aftercare' },
                    { name: 'Hydrating facial', path: 'aftercare/Skin/Hydrating_facial.json', type: 'aftercare' },
                    { name: 'Jessner peel', path: 'aftercare/Skin/Jessner_peel.json', type: 'aftercare' },
                    { name: 'Lactic peel', path: 'aftercare/Skin/Lactic_peel.json', type: 'aftercare' },
                    { name: 'Mandelic peel', path: 'aftercare/Skin/Mandelic_peel.json', type: 'aftercare' },
                    { name: 'Medium-depth peels', path: 'aftercare/Skin/Medium-depth_peels.json', type: 'aftercare' },
                    { name: 'Oxygen facial', path: 'aftercare/Skin/Oxygen_facial.json', type: 'aftercare' },
                    { name: 'Salicylic peel', path: 'aftercare/Skin/Salicylic_peel.json', type: 'aftercare' },
                    { name: 'Sensitive skin facial', path: 'aftercare/Skin/Sensitive_skin_facial.json', type: 'aftercare' },
                    { name: 'Superficial peels', path: 'aftercare/Skin/Superficial_peels.json', type: 'aftercare' },
                    { name: 'TCA peel', path: 'aftercare/Skin/TCA_peel.json', type: 'aftercare' }
                ]
            }
        ]
    },
    {
        label: 'Consent forms',
        kind: 'consent-root',
        groups: [
            {
                label: 'Beauty',
                kind: 'consent',
                basePath: 'consent-form/Beauty',
                files: [
                    { name: 'Acne treatment facial', path: 'consent-form/Beauty/Acne treatment facial.json' },
                    { name: 'Anti-ageing facial', path: 'consent-form/Beauty/Anti-ageing facial.json' },
                    { name: 'Carbon laser facial', path: 'consent-form/Beauty/Carbon laser facial.json' },
                    { name: 'Chemical peels', path: 'consent-form/Beauty/Chemical peels.json' },
                    { name: 'Deep cleansing facial', path: 'consent-form/Beauty/Deep cleansing facial.json' },
                    { name: 'Dermaplaning', path: 'consent-form/Beauty/Dermaplaning.json' },
                    { name: 'Hydrating facial', path: 'consent-form/Beauty/Hydrating facial.json' },
                    { name: 'LED light therapy', path: 'consent-form/Beauty/LED light therapy.json' },
                    { name: 'Microneedling', path: 'consent-form/Beauty/Microneedling.json' },
                    { name: 'Oxygen facial', path: 'consent-form/Beauty/Oxygen facial.json' },
                    { name: 'Sugaring', path: 'consent-form/Beauty/Sugaring.json' },
                    { name: 'Threading', path: 'consent-form/Beauty/Threading.json' },
                    { name: 'Waxing', path: 'consent-form/Beauty/Waxing.json' }
                ]
            },
            {
                label: 'Cosmetics',
                kind: 'consent',
                basePath: 'consent-form/Cosmetics',
                files: [
                    { name: 'Anti-wrinkle injections', path: 'consent-form/Cosmetics/Anti-wrinkle injections.json' },
                    { name: 'Bum filler', path: 'consent-form/Cosmetics/bum-filler.json' },
                    { name: 'Dermal fillers', path: 'consent-form/Cosmetics/Dermal fillers.json' },
                    { name: 'Fat dissolving injections', path: 'consent-form/Cosmetics/Fat dissolving injections.json' },
                    { name: 'Lumi Eye', path: 'consent-form/Cosmetics/Lumi Eye.json' },
                    { name: 'Mesotherapy', path: 'consent-form/Cosmetics/Mesotherapy.json' },
                    { name: 'Polynucleotides', path: 'consent-form/Cosmetics/Polynucleotides.json' },
                    { name: 'Profhilo', path: 'consent-form/Cosmetics/Profhilo.json' },
                    { name: 'PRP (Vampire Facial)', path: 'consent-form/Cosmetics/PRP (Vampire Facial).json' },
                    { name: 'Skin boosters', path: 'consent-form/Cosmetics/Skin boosters.json' }
                ]
            },
            {
                label: 'Dantist',
                kind: 'consent',
                basePath: 'consent-form/Dantist',
                files: [
                    { name: 'Cyst removal', path: 'consent-form/Dantist/Cyst removal.json' },
                    { name: 'Dental implants', path: 'consent-form/Dantist/Dental implants.json' },
                    { name: 'Lingual braces', path: 'consent-form/Dantist/Lingual braces.json' },
                    { name: 'Porcelain veneers', path: 'consent-form/Dantist/Porcelain veneers.json' },
                    { name: 'Teeth whitening', path: 'consent-form/Dantist/Teeth whitening.json' }
                ]
            },
            {
                label: 'Face',
                kind: 'consent',
                basePath: 'consent-form/Face',
                files: [
                    { name: 'Airbrush makeup', path: 'consent-form/Face/Airbrush makeup.json' },
                    { name: 'Brow lamination', path: 'consent-form/Face/Brow lamination.json' },
                    { name: 'Eyebrow shaping', path: 'consent-form/Face/Eyebrow shaping.json' },
                    { name: 'Eyebrow tinting', path: 'consent-form/Face/Eyebrow tinting.json' },
                    { name: 'Eyelash extensions', path: 'consent-form/Face/Eyelash extensions.json' },
                    { name: 'Eyeliner', path: 'consent-form/Face/Eyeliner.json' },
                    { name: 'Lash lift', path: 'consent-form/Face/Lash lift.json' },
                    { name: 'Lash tint', path: 'consent-form/Face/Lash tint.json' },
                    { name: 'Lip blush', path: 'consent-form/Face/Lip blush.json' },
                    { name: 'Microblading', path: 'consent-form/Face/Microblading.json' },
                    { name: 'Permanent makeup (PMU)', path: 'consent-form/Face/Permanent makeup (PMU).json' },
                    { name: 'Powder brows', path: 'consent-form/Face/Powder brows.json' },
                    { name: 'Under-eye treatments', path: 'consent-form/Face/Under-eye treatments.json' }
                ]
            },
            {
                label: 'Hair',
                kind: 'consent',
                basePath: 'consent-form/Hair',
                files: [
                    { name: 'Hair styling', path: 'consent-form/Hair/Hair styling.json' },
                    { name: 'Hair treatments', path: 'consent-form/Hair/Hair treatments.json' }
                ]
            },
            {
                label: 'Laser – Body Contouring & Fat Reduction',
                kind: 'consent',
                basePath: 'consent-form/Laser/Body Contouring & Fat Reduction',
                files: [
                    { name: 'Cellulite laser treatment', path: 'consent-form/Laser/Body Contouring & Fat Reduction/Cellulite laser treatment.json' },
                    { name: 'Laser lipolysis', path: 'consent-form/Laser/Body Contouring & Fat Reduction/Laser lipolysis.json' },
                    { name: 'Laser-assisted fat reduction', path: 'consent-form/Laser/Body Contouring & Fat Reduction/Laser-assisted fat reduction.json' },
                    { name: 'Skin tightening post-fat reduction', path: 'consent-form/Laser/Body Contouring & Fat Reduction/Skin tightening post-fat reduction.json' }
                ]
            },
            {
                label: 'Laser – Laser Acne Treatments',
                kind: 'consent',
                basePath: 'consent-form/Laser/Laser Acne Treatments',
                files: [
                    { name: 'Acne bacteria reduction (laser)', path: 'consent-form/Laser/Laser Acne Treatments/Acne bacteria reduction (laser).json' },
                    { name: 'Acne scar laser treatment', path: 'consent-form/Laser/Laser Acne Treatments/Acne scar laser treatment.json' },
                    { name: 'Active acne laser treatment', path: 'consent-form/Laser/Laser Acne Treatments/Active acne laser treatment.json' },
                    { name: 'Post-acne redness treatment', path: 'consent-form/Laser/Laser Acne Treatments/Post-acne redness treatment.json' },
                    { name: 'Sebum control laser therapy', path: 'consent-form/Laser/Laser Acne Treatments/Sebum control laser therapy.json' }
                ]
            },
            {
                label: 'Laser – Laser Hair Removal',
                kind: 'consent',
                basePath: 'consent-form/Laser/Laser Hair Removal',
                files: [
                    { name: 'Beard shaping (laser)', path: 'consent-form/Laser/Laser Hair Removal/Beard shaping (laser).json' },
                    { name: 'Brazilian laser', path: 'consent-form/Laser/Laser Hair Removal/Brazilian laser.json' },
                    { name: 'Full-body laser hair removal', path: 'consent-form/Laser/Laser Hair Removal/Full-body laser hair removal.json' },
                    { name: 'Ingrown hair reduction (laser)', path: 'consent-form/Laser/Laser Hair Removal/Ingrown hair reduction (laser).json' },
                    { name: 'Laser hair reduction', path: 'consent-form/Laser/Laser Hair Removal/Laser hair reduction.json' },
                    { name: 'Laser hair removal, face & body', path: 'consent-form/Laser/Laser Hair Removal/Laser hair removal ,face & body.json' },
                    { name: 'Laser Resurfacing (combined info)', path: 'consent-form/Laser/Laser Hair Removal/Laser Resurfacing.json' },
                    { name: 'Laser tattoo removal (hair removal category)', path: 'consent-form/Laser/Laser Hair Removal/Laser tattoo removal.json' }
                ]
            },
            {
                label: 'Laser – Laser Resurfacing',
                kind: 'consent',
                basePath: 'consent-form/Laser/Laser Resurfacing',
                files: [
                    { name: 'Ablative laser resurfacing', path: 'consent-form/Laser/Laser Resurfacing/Ablative laser resurfacing.json' },
                    { name: 'CO₂ laser resurfacing', path: 'consent-form/Laser/Laser Resurfacing/CO₂ laser resurfacing.json' },
                    { name: 'Er YAG laser resurfacing', path: 'consent-form/Laser/Laser Resurfacing/Er YAG laser resurfacing.json' },
                    { name: 'Fractional laser resurfacing', path: 'consent-form/Laser/Laser Resurfacing/Fractional laser resurfacing.json' },
                    { name: 'Laser skin renewal', path: 'consent-form/Laser/Laser Resurfacing/Laser skin renewal.json' },
                    { name: 'Non-ablative laser resurfacing', path: 'consent-form/Laser/Laser Resurfacing/Non-ablative laser resurfacing.json' }
                ]
            },
            {
                label: 'Laser – Laser Skin Rejuvenation',
                kind: 'consent',
                basePath: 'consent-form/Laser/Laser Skin Rejuvenation',
                files: [
                    { name: 'Collagen stimulation, laser', path: 'consent-form/Laser/Laser Skin Rejuvenation/Collagen stimulation, laser.json' },
                    { name: 'Fine line & wrinkle reduction', path: 'consent-form/Laser/Laser Skin Rejuvenation/Fine line & wrinkle reduction.json' },
                    { name: 'Laser facial', path: 'consent-form/Laser/Laser Skin Rejuvenation/Laser facial.json' },
                    { name: 'Laser skin rejuvenation', path: 'consent-form/Laser/Laser Skin Rejuvenation/Laser skin rejuvenation.json' },
                    { name: 'Pore reduction, laser', path: 'consent-form/Laser/Laser Skin Rejuvenation/Pore reduction, laser.json' },
                    { name: 'Skin texture refinement', path: 'consent-form/Laser/Laser Skin Rejuvenation/Skin texture refinement.json' }
                ]
            },
            {
                label: 'Laser – Laser Skin Tightening & Lifting',
                kind: 'consent',
                basePath: 'consent-form/Laser/Laser Skin Tightening & Lifting',
                files: [
                    { name: 'Body skin tightening', path: 'consent-form/Laser/Laser Skin Tightening & Lifting/Body skin tightening.json' },
                    { name: 'Eye area tightening', path: 'consent-form/Laser/Laser Skin Tightening & Lifting/Eye area tightening.json' },
                    { name: 'Jawline tightening', path: 'consent-form/Laser/Laser Skin Tightening & Lifting/Jawline tightening.json' },
                    { name: 'Laser skin firming', path: 'consent-form/Laser/Laser Skin Tightening & Lifting/Laser skin firming.json' },
                    { name: 'Neck tightening', path: 'consent-form/Laser/Laser Skin Tightening & Lifting/Neck tightening.json' },
                    { name: 'Non-surgical skin tightening (laser)', path: 'consent-form/Laser/Laser Skin Tightening & Lifting/Non-surgical skin tightening (laser).json' }
                ]
            },
            {
                label: 'Laser – Laser-Based Combination Treatments',
                kind: 'consent',
                basePath: 'consent-form/Laser/Laser-Based Combination Treatments',
                files: [
                    { name: 'Laser + chemical peel protocols', path: 'consent-form/Laser/Laser-Based Combination Treatments/Laser + chemical peel protocols.json' },
                    { name: 'Laser + microneedling', path: 'consent-form/Laser/Laser-Based Combination Treatments/Laser + microneedling.json' },
                    { name: 'Laser + PRP', path: 'consent-form/Laser/Laser-Based Combination Treatments/Laser + PRP.json' },
                    { name: 'Laser + skin boosters', path: 'consent-form/Laser/Laser-Based Combination Treatments/Laser + skin boosters.json' }
                ]
            },
            {
                label: 'Laser – Medical, Dermatological Laser Treatments',
                kind: 'consent',
                basePath: 'consent-form/Laser/Medical, Dermatological Laser Treatments',
                files: [
                    { name: 'Benign lesion removal', path: 'consent-form/Laser/Medical, Dermatological Laser Treatments/Benign lesion removal.json' },
                    { name: 'Laser mole removal', path: 'consent-form/Laser/Medical, Dermatological Laser Treatments/Laser mole removal.json' },
                    { name: 'Laser skin tag removal', path: 'consent-form/Laser/Medical, Dermatological Laser Treatments/Laser skin tag removal.json' },
                    { name: 'Laser wart removal', path: 'consent-form/Laser/Medical, Dermatological Laser Treatments/Laser wart removal.json' },
                    { name: 'Nail fungus treatment (laser)', path: 'consent-form/Laser/Medical, Dermatological Laser Treatments/Nail fungus treatment (laser).json' },
                    { name: 'Psoriasis laser therapy', path: 'consent-form/Laser/Medical, Dermatological Laser Treatments/Psoriasis laser therapy.json' },
                    { name: 'Vitiligo laser therapy', path: 'consent-form/Laser/Medical, Dermatological Laser Treatments/Vitiligo laser therapy.json' }
                ]
            },
            {
                label: 'Laser – Pigmentation & Sun Damage',
                kind: 'consent',
                basePath: 'consent-form/Laser/Pigmentation & Sun Damage',
                files: [
                    { name: 'Age spot removal', path: 'consent-form/Laser/Pigmentation & Sun Damage/Age spot removal.json' },
                    { name: 'Freckle reduction', path: 'consent-form/Laser/Pigmentation & Sun Damage/Freckle reduction.json' },
                    { name: 'Laser pigmentation removal', path: 'consent-form/Laser/Pigmentation & Sun Damage/Laser pigmentation removal.json' },
                    { name: 'Melasma management (laser-assisted)', path: 'consent-form/Laser/Pigmentation & Sun Damage/Melasma management (laser-assisted).json' },
                    { name: 'Sun spot treatment', path: 'consent-form/Laser/Pigmentation & Sun Damage/Sun spot treatment.json' },
                    { name: 'Uneven skin tone correction', path: 'consent-form/Laser/Pigmentation & Sun Damage/Uneven skin tone correction.json' }
                ]
            },
            {
                label: 'Laser – Scar & Stretch Mark Treatments',
                kind: 'consent',
                basePath: 'consent-form/Laser/Scar & Stretch Mark Treatments',
                files: [
                    { name: 'Keloid scar management (laser-assisted)', path: 'consent-form/Laser/Scar & Stretch Mark Treatments/Keloid scar management (laser-assisted).json' },
                    { name: 'Laser scar reduction', path: 'consent-form/Laser/Scar & Stretch Mark Treatments/Laser scar reduction.json' },
                    { name: 'Stretch mark reduction (laser)', path: 'consent-form/Laser/Scar & Stretch Mark Treatments/Stretch mark reduction (laser).json' },
                    { name: 'Surgical scar treatment', path: 'consent-form/Laser/Scar & Stretch Mark Treatments/Surgical scar treatment.json' },
                    { name: 'Trauma scar treatment', path: 'consent-form/Laser/Scar & Stretch Mark Treatments/Trauma scar treatment.json' }
                ]
            },
            {
                label: 'Laser – Specialist & Advanced',
                kind: 'consent',
                basePath: 'consent-form/Laser/Specialist , Advanced Laser',
                files: [
                    { name: 'Hyperhidrosis', path: 'consent-form/Laser/Specialist , Advanced Laser/hyperhidrosis.json' },
                    { name: 'Laser pore sealing', path: 'consent-form/Laser/Specialist , Advanced Laser/Laser pore sealing.json' },
                    { name: 'Laser rejuvenation for intimate areas', path: 'consent-form/Laser/Specialist , Advanced Laser/Laser rejuvenation for intimate areas.json' },
                    { name: 'Laser skin bleaching', path: 'consent-form/Laser/Specialist , Advanced Laser/Laser skin bleaching.json' }
                ]
            },
            {
                label: 'Laser – Tattoo & PMU Removal',
                kind: 'consent',
                basePath: 'consent-form/Laser/Tattoo & PMU Removal',
                files: [
                    { name: 'Eyebrow tattoo removal', path: 'consent-form/Laser/Tattoo & PMU Removal/Eyebrow tattoo removal.json' },
                    { name: 'Laser tattoo removal', path: 'consent-form/Laser/Tattoo & PMU Removal/Laser tattoo removal.json' },
                    { name: 'Lip blush tattoo removal', path: 'consent-form/Laser/Tattoo & PMU Removal/Lip blush tattoo removal.json' },
                    { name: 'Microblading removal (laser)', path: 'consent-form/Laser/Tattoo & PMU Removal/Microblading removal (laser).json' },
                    { name: 'Multi-colour tattoo removal', path: 'consent-form/Laser/Tattoo & PMU Removal/Multi-colour tattoo removal.json' },
                    { name: 'Permanent makeup removal', path: 'consent-form/Laser/Tattoo & PMU Removal/Permanent makeup removal.json' }
                ]
            },
            {
                label: 'Laser – Vascular & Redness Treatments',
                kind: 'consent',
                basePath: 'consent-form/Laser/Vascular & Redness Treatments',
                files: [
                    { name: 'Broken capillary removal', path: 'consent-form/Laser/Vascular & Redness Treatments/Broken capillary removal.json' },
                    { name: 'Cherry angioma removal', path: 'consent-form/Laser/Vascular & Redness Treatments/Cherry angioma removal.json' },
                    { name: 'Facial redness reduction', path: 'consent-form/Laser/Vascular & Redness Treatments/Facial redness reduction.json' },
                    { name: 'Laser thread vein removal', path: 'consent-form/Laser/Vascular & Redness Treatments/Laser thread vein removal.json' },
                    { name: 'Rosacea laser treatment', path: 'consent-form/Laser/Vascular & Redness Treatments/Rosacea laser treatment.json' },
                    { name: 'Spider vein treatment', path: 'consent-form/Laser/Vascular & Redness Treatments/Spider vein treatment.json' }
                ]
            },
            {
                label: 'Massage',
                kind: 'consent',
                basePath: 'consent-form/Massage',
                files: [
                    { name: 'Reflexology', path: 'consent-form/Massage/Reflexology.json' }
                ]
            },
            {
                label: 'Skin',
                kind: 'consent',
                basePath: 'consent-form/Skin',
                files: [
                    { name: 'Acne control facial', path: 'consent-form/Skin/Acne control facial.json' },
                    { name: 'Brightening facial', path: 'consent-form/Skin/Brightening facial.json' },
                    // Calming-barrier-repair facial appears to lack a .json extension in the folder listing; excluded here.
                    { name: 'Carbon laser facial', path: 'consent-form/Skin/Carbon laser facial.json' },
                    { name: 'Chemical peels', path: 'consent-form/Skin/Chemical peels.json' },
                    { name: 'Deep peel', path: 'consent-form/Skin/Deep peel.json' },
                    { name: 'Enzyme peels', path: 'consent-form/Skin/Enzyme peels.json' },
                    { name: 'Glycolic peel', path: 'consent-form/Skin/Glycolic peel.json' },
                    { name: 'Jessner peel', path: 'consent-form/Skin/Jessner peel.json' },
                    { name: 'Lactic peel', path: 'consent-form/Skin/Lactic peel.json' },
                    { name: 'Mandelic peel', path: 'consent-form/Skin/Mandelic peel.json' },
                    { name: 'Medium-depth peel', path: 'consent-form/Skin/Medium-depth peel.json' },
                    { name: 'Salicylic peel', path: 'consent-form/Skin/Salicylic peel.json' },
                    { name: 'Sensitive skin facial', path: 'consent-form/Skin/Sensitive skin facial.json' },
                    { name: 'Superficial peel', path: 'consent-form/Skin/Superficial peel.json' },
                    { name: 'TCA peel', path: 'consent-form/Skin/TCA peel.json' }
                ]
            }
        ]
    }
];

const fileTreeEl = document.getElementById('file-tree');
const fileInfoEl = document.getElementById('file-info');
const viewerEl = document.getElementById('viewer');

/**
 * Build the sidebar navigation from FILE_INDEX.
 */
function buildFileTree() {
    if (!fileTreeEl) return;

    const fragment = document.createDocumentFragment();

    FILE_INDEX.forEach(section => {
        const groupDiv = document.createElement('div');
        groupDiv.className = 'folder-group';

        const labelEl = document.createElement('div');
        labelEl.className = 'folder-label';
        labelEl.textContent = section.label;
        groupDiv.appendChild(labelEl);

        section.groups.forEach(folder => {
            const details = document.createElement('details');
            details.className = 'folder';

            const summary = document.createElement('summary');
            const icon = document.createElement('span');
            icon.className = 'summary-icon';
            icon.textContent = '▸';
            const summaryText = document.createElement('span');
            summaryText.textContent = folder.label;
            summary.appendChild(icon);
            summary.appendChild(summaryText);

            details.appendChild(summary);

            const list = document.createElement('ul');
            list.className = 'file-list';

            folder.files.forEach(file => {
                const li = document.createElement('li');
                const button = document.createElement('button');
                button.type = 'button';
                button.className = 'file-item-btn';
                button.dataset.path = file.path;
                button.dataset.type = file.type || (section.kind === 'consent-root' ? 'consent' : 'generic');

                const nameSpan = document.createElement('span');
                nameSpan.className = 'file-item-name';
                nameSpan.textContent = file.name;
                button.appendChild(nameSpan);

                const metaSpan = document.createElement('span');
                metaSpan.className = 'file-item-meta';
                metaSpan.textContent = file.type === 'aftercare' ? 'aftercare' : section.kind === 'consent-root' ? 'consent' : 'json';
                button.appendChild(metaSpan);

                button.addEventListener('click', () => {
                    selectFile(button, {
                        name: file.name,
                        path: file.path,
                        type: button.dataset.type
                    });
                });

                li.appendChild(button);
                list.appendChild(li);
            });

            details.appendChild(list);
            groupDiv.appendChild(details);
        });

        fragment.appendChild(groupDiv);
    });

    fileTreeEl.innerHTML = '';
    fileTreeEl.appendChild(fragment);
}

/**
 * Handle selecting a file from the sidebar.
 */
async function selectFile(button, file) {
    // Mark active button
    document.querySelectorAll('.file-item-btn.active').forEach(btn => {
        btn.classList.remove('active');
    });
    button.classList.add('active');

    // Update file info header
    renderFileInfo(file);

    // Fetch and render file content
    await loadAndRenderFile(file);
}

function renderFileInfo(file) {
    if (!fileInfoEl) return;

    const badges = [];
    if (file.type === 'aftercare') badges.push('<span class="badge badge--aftercare">Aftercare</span>');
    if (file.type === 'consent') badges.push('<span class="badge badge--consent">Consent</span>');
    if (!badges.length) badges.push('<span class="badge badge--generic">JSON</span>');

    fileInfoEl.innerHTML =
        '<h2 class="file-title">' + escapeHtml(file.name) + '</h2>' +
        '<p class="file-path">' + escapeHtml(file.path) + '</p>' +
        '<div class="file-badges">' + badges.join(' ') + '</div>';
}

async function loadAndRenderFile(file) {
    if (!viewerEl) return;

    viewerEl.classList.add('loading');
    viewerEl.innerHTML = '<p class="muted">Loading <strong>' + escapeHtml(file.name) + '</strong>…</p>';

    try {
        // If the page is opened directly from the filesystem (file://),
        // most browsers will block fetch() to local files for security reasons.
        if (window.location.protocol === 'file:') {
            throw new Error(
                'This viewer must be opened via a local web server (http://), not directly from the file system. ' +
                'Please run a simple static server in the project folder and open index.html through http://localhost.'
            );
        }

        const response = await fetch(file.path);
        if (!response.ok) {
            const status = response.status || 0;
            throw new Error('HTTP ' + status + ' while requesting "' + file.path + '"');
        }
        const json = await response.json();

        const type = detectJsonType(json, file);

        if (type === 'aftercare') {
            renderAftercare(json);
        } else if (type === 'consent') {
            renderConsent(json);
        } else {
            renderRawJson(json);
        }
    } catch (err) {
        console.error(err);
        viewerEl.innerHTML =
            '<p class="error">Could not load this file.</p>' +
            '<p class="muted">' + escapeHtml(String(err.message || err)) + '</p>';
    } finally {
        viewerEl.classList.remove('loading');
    }
}

function detectJsonType(json, file) {
    if (file.type === 'aftercare') return 'aftercare';
    if (file.type === 'consent') return 'consent';

    if (json && json.form_data && json.form_data.instructions) return 'aftercare';
    if (json && json.data && json.data.getWalkInConsentFormQuestions) return 'consent';
    return 'generic';
}

function renderAftercare(json) {
    const fd = json.form_data || {};
    const meta = json.metadata || {};
    const instructions = (fd.instructions && fd.instructions.sections) || [];

    const parts = [];

    if (fd.document_title) {
        parts.push(
            '<div class="section-block">' +
            '<h3 class="section-title">' + escapeHtml(fd.document_title) + '</h3>' +
            (fd.introduction ? '<p class="section-body">' + escapeHtml(fd.introduction) + '</p>' : '') +
            '</div>'
        );
    }

    if (fd.instructions && fd.instructions.general_directive) {
        parts.push(
            '<div class="section-block">' +
            '<p class="section-body"><strong>' + escapeHtml(fd.instructions.general_directive) + '</strong></p>' +
            '</div>'
        );
    }

    instructions.forEach(section => {
        const title = section.title || '';
        const content = section.content || '';
        const items = section.items || null;

        let bodyHtml = '';
        if (items && Array.isArray(items)) {
            bodyHtml =
                '<ul class="section-list">' +
                items.map(item => '<li>' + escapeHtml(item) + '</li>').join('') +
                '</ul>';
        } else if (content) {
            bodyHtml = '<p class="section-body">' + escapeHtml(content) + '</p>';
        }

        parts.push(
            '<div class="section-block">' +
            (title ? '<h4 class="section-title">' + escapeHtml(title) + '</h4>' : '') +
            bodyHtml +
            '</div>'
        );
    });

    if (fd.patient_declaration) {
        const pd = fd.patient_declaration;
        parts.push(
            '<div class="section-block">' +
            '<h4 class="section-title">Patient declaration</h4>' +
            (pd.reading_confirmation ? '<p class="section-body">' + escapeHtml(pd.reading_confirmation) + '</p>' : '') +
            (pd.question_opportunity ? '<p class="section-body">' + escapeHtml(pd.question_opportunity) + '</p>' : '') +
            (pd.declaration_text ? '<p class="section-body"><strong>' + escapeHtml(pd.declaration_text) + '</strong></p>' : '') +
            '</div>'
        );
    }

    const metaKeys = Object.keys(meta);
    if (metaKeys.length) {
        parts.push(
            '<div class="section-block">' +
            '<h4 class="section-title">Metadata</h4>' +
            '<table class="meta-table"><tbody>' +
            metaKeys
                .map(key => {
                    const value = meta[key];
                    return (
                        '<tr>' +
                        '<th>' + escapeHtml(key) + '</th>' +
                        '<td>' + escapeHtml(formatMetaValue(value)) + '</td>' +
                        '</tr>'
                    );
                })
                .join('') +
            '</tbody></table>' +
            '</div>'
        );
    }

    viewerEl.innerHTML = parts.join('') || '<p class="muted">No structured aftercare content found.</p>';
}

function renderConsent(json) {
    const root = json.data && json.data.getWalkInConsentFormQuestions && json.data.getWalkInConsentFormQuestions.data;
    if (!root) {
        renderRawJson(json);
        return;
    }

    const disclaimerEntry = Array.isArray(root.disclaimerData) ? root.disclaimerData[0] : null;
    const questions = Array.isArray(root.questions) ? root.questions : [];

    const parts = [];

    if (disclaimerEntry) {
        const name = disclaimerEntry.consentFormName || '';
        const disclaimer = disclaimerEntry.disclaimer || '';

        parts.push(
            '<div class="section-block">' +
            (name ? '<h3 class="section-title">' + escapeHtml(name) + '</h3>' : '') +
            (disclaimer
                ? '<p class="section-body preformatted">' + escapeHtml(disclaimer) + '</p>'
                : '') +
            '</div>'
        );
    }

    if (questions.length) {
        parts.push(
            '<div class="section-block">' +
            '<h4 class="section-title">Consent questions</h4>' +
            '<ol class="questions-list">' +
            questions
                .map(q => {
                    const content = q.content || '';
                    return '<li>' + escapeHtml(content) + '</li>';
                })
                .join('') +
            '</ol>' +
            '</div>'
        );
    }

    parts.push(
        '<p class="muted">Client signature and marketing permissions are stored in the JSON and can be extended in the UI if needed.</p>'
    );

    viewerEl.innerHTML = parts.join('');
}

function renderRawJson(json) {
    viewerEl.innerHTML =
        '<div class="section-block">' +
        '<h4 class="section-title">Raw JSON</h4>' +
        '<pre class="json-raw">' + escapeHtml(JSON.stringify(json, null, 2)) + '</pre>' +
        '</div>';
}

function formatMetaValue(value) {
    if (Array.isArray(value)) {
        return value.join(', ');
    }
    if (value && typeof value === 'object') {
        try {
            return JSON.stringify(value);
        } catch {
            return String(value);
        }
    }
    return String(value);
}

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildFileTree);
} else {
    buildFileTree();
}
