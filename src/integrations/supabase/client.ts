import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://gwomnwklcvaqvekzqbeq.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_zbDPBkThQjCP_cVfL2XleA_sGBIdI73';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
