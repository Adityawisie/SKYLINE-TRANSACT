
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://kwwynubzeqmcbwuehqwg.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt3d3ludWJ6ZXFtY2J3dWVocXdnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU0MzgwNTAsImV4cCI6MjA3MTAxNDA1MH0.elCIgsfdR7htuyOuiA0vVtzHHAM5pMFHENTkvITZ_nw'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
