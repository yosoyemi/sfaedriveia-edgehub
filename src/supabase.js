// src/supabase.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zjdlmsjjzjxeogilzpam.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpqZGxtc2pqemp4ZW9naWx6cGFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMxNDAwNTksImV4cCI6MjA1ODcxNjA1OX0.KISWstPeEL_GYbTKGvACuyHwabACKZCck5Vp5dAI_6E'

export const supabase = createClient(supabaseUrl, supabaseKey)
