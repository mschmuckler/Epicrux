@seizures.each do |seizure|
  json.partial! "api/seizures/seizure.json.jbuilder", seizure: seizure
end
