
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const SUPABASE_URL = 'https://ymdjxsykryspllluvrpo.supabase.co'
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_Ib3BT64w-Cq6zLLoLJ6kKg_1XqyhQ0W'

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
)
