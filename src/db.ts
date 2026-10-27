import { createClient } from '@supabase/supabase-js';

// 1. 아까 복사해 둔 Supabase 정보 입력
const supabaseUrl = 'https://pubsuhxneidbzxxznhaa.supabase.co';
const supabaseKey = 'sb_publishable_zumCfRpySfhkZDdFLhCoHQ_63QFri4j';

export const supabase = createClient(supabaseUrl, supabaseKey);